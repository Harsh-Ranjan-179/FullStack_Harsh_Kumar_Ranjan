import { pool } from '../config/db.js';

export const createJob = async (req, res) => {
    try {
        const { title, description, salary, location, company } = req.body;

        const [result] = await pool.query(
            'INSERT INTO jobs (title, description, salary, location, company) VALUES (?, ?, ?, ?, ?)',
            [title, description, salary, location, company]
        );

        res.status(201).json({ message: 'Job created successfully', jobId: result.insertId });
    } catch (error) {
        console.error('Error creating job:', error);
        res.status(500).json({ message: 'Server error while creating job' });
    }
};

export const getJobs = async (req, res) => {
    try {
        const [jobs] = await pool.query('SELECT * FROM jobs ORDER BY created_at DESC');
        res.status(200).json(jobs);
    } catch (error) {
        console.error('Error fetching jobs:', error);
        res.status(500).json({ message: 'Server error while fetching jobs' });
    }
};

export const searchJobs = async (req, res) => {
    try {
        const { q } = req.query; 
        
        if (!q) {
            return res.status(400).json({ message: 'Search keyword is required' });
        }

        const searchTerm = `%${q}%`; 

        const [jobs] = await pool.query(
            'SELECT * FROM jobs WHERE title LIKE ? OR location LIKE ? ORDER BY created_at DESC',
            [searchTerm, searchTerm]
        );

        res.status(200).json(jobs);
    } catch (error) {
        console.error('Error searching jobs:', error);
        res.status(500).json({ message: 'Server error while searching jobs' });
    }
};

export const deleteJob = async (req, res) => {
    try {
        const jobId = req.params.id;

        const [result] = await pool.query('DELETE FROM jobs WHERE id = ?', [jobId]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Job not found' });
        }

        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
        console.error('Error deleting job:', error);
        res.status(500).json({ message: 'Server error while deleting job' });
    }
};
