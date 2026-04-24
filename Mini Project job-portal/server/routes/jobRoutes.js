import express from 'express';
import { createJob, getJobs, searchJobs, deleteJob } from '../controllers/jobController.js';
import { verifyToken } from '../middleware/authMiddleware.js'; // We need this to protect routes

const router = express.Router();

router.get('/search', searchJobs);

router.get('/', getJobs);

router.post('/', verifyToken, createJob);

router.delete('/:id', verifyToken, deleteJob);

export default router;
