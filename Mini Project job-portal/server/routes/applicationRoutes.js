import express from 'express';
import { applyForJob, getUserApplications } from '../controllers/applicationController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', verifyToken, applyForJob);

router.get('/', verifyToken, getUserApplications);

export default router;
