import express from 'express';
// import initialRenderController from '../controller';
import initialRenderController from '../controller/index'

const router = express.Router();

router.get('/', initialRenderController);

export default router;