import express from 'express';
import {
  createCategory,
  getCategories,
  getCategoriesByType,
  updateCategory,
  deleteCategory,
} from '../controller/Category.Controller.js';

const router = express.Router();

router.post('/categories', createCategory);
router.get('/categories', getCategories);
router.get('/categories/type/:type', getCategoriesByType);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);

export default router;
