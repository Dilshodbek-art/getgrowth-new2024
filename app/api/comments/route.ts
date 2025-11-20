import { NextRequest, NextResponse } from 'next/server';
import { pool, initDatabase } from '@/lib/db';

// Initialize database on first request
let isInitialized = false;

async function ensureInitialized() {
  if (!isInitialized) {
    await initDatabase();
    isInitialized = true;
  }
}

export async function GET() {
  try {
    await ensureInitialized();
    
    const result = await pool.query(
      'SELECT * FROM comments ORDER BY created_at DESC'
    );

    return NextResponse.json({ comments: result.rows });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureInitialized();
    
    const body = await request.json();
    const { name, text, reply_to } = body;

    if (!text || text.trim().length === 0) {
      return NextResponse.json(
        { error: 'Comment text is required' },
        { status: 400 }
      );
    }

    const commentName = name && name.trim() ? name.trim() : 'Guest';
    const commentText = text.trim();

    const result = await pool.query(
      'INSERT INTO comments (name, text, reply_to, likes) VALUES ($1, $2, $3, 0) RETURNING *',
      [commentName, commentText, reply_to || null]
    );

    return NextResponse.json({ comment: result.rows[0] });
  } catch (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json(
      { error: 'Failed to create comment' },
      { status: 500 }
    );
  }
}
