import { pool } from '../config/db.js';

export const applyForJob = async (req, res) => {
    try {
        const { job_id } = req.body;
        
        const user_id = req.user.userId; 
        const [existingApplication] = await pool.query(
            'SELECT * FROM applications WHERE user_id = ? AND job_id = ?',
            [user_id, job_id]
        );

        if (existingApplication.length > 0) {
            return res.status(400).json({ message: 'You have already applied for this job.' });
        }

        await pool.query(
            'INSERT INTO applications (user_id, job_id) VALUES (?, ?)',
            [user_id, job_id]
        );

        res.status(201).json({ message: 'Successfully applied for the job!' });

    } catch (error) {
        console.error('Error applying for job:', error);
        res.status(500).json({ message: 'Server error while applying for job' });
    }
};

export const getUserApplications = async (req, res) => {
    try {
        const user_id = req.user.userId;

        const [applications] = await pool.query(`
            SELECT 
                applications.id AS application_id, 
                applications.applied_at, 
                jobs.id AS job_id, 
                jobs.title, 
                jobs.company, 
                jobs.location 
            FROM applications
            JOIN jobs ON applications.job_id = jobs.id
            WHERE applications.user_id = ?
            ORDER BY applications.applied_at DESC
        `, [user_id]);

        res.status(200).json(applications);

    } catch (error) {
        console.error('Error fetching applications:', error);
        res.status(500).json({ message: 'Server error while fetching applications' });
    }
};
