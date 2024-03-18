import { Comments } from './comments.js';

const comments = await new Comments({number: 5}).getAll();
