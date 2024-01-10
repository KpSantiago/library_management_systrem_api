const express = require('express');

const LivrosControllers = require('../controllers/LivrosControllers');
const AutoresControllers = require('../controllers/AutoresController');
const AlunosController = require('../controllers/AlunosController');

const upload = require('../images/config')

const router = express.Router();

router.get('/api/livros', upload.array('image'), LivrosControllers.getLivros);
router.get('/api/livros/:id', upload.array('image'), LivrosControllers.getOneLivro);
router.put('/api/bookPurchased/:id', LivrosControllers.bookPurchased);
router.post('/api/livros', upload.single('image'), LivrosControllers.addimg)

router.get('/api/autores', AutoresControllers.getAutores);

router.get('/api/alunos', AlunosController.getAlunos);
router.get('/api/alunos/:id', AlunosController.getOneAluno);
router.put('/api/purchase/:id', AlunosController.purchaseBook);
router.post('/auth/register', AlunosController.cadastro);
router.post('/auth/login', AlunosController.login);

module.exports = router;