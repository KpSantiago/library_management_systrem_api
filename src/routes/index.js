const express = require('express');

const LivrosControllers = require('../controllers/LivrosControllers');
const AutoresControllers = require('../controllers/AutoresController');
const AlunosController = require('../controllers/AlunosController');
const AutoresLivrosControllers = require('../controllers/AutoresLivrosController');

const upload = require('../images/config');

const router = express.Router();

router.get('/api/livros', upload.array('image'), LivrosControllers.getLivros);
router.get('/api/livros/:id', upload.array('image'), LivrosControllers.getOneLivro);
router.put('/api/bookPurchased/:id', LivrosControllers.bookPurchased);
router.post('/api/livros', upload.single('image'), LivrosControllers.addimg)

router.get('/api/autores', AutoresControllers.getAutores);
router.post('/api/autores', AutoresControllers.postAutores);

router.get('/api/autores_livros', AutoresLivrosControllers.getAutoresLivros);
router.post('/api/autores_livros', AutoresLivrosControllers.postAutoresLivros);

router.get('/api/alunos', AlunosController.getAlunos);
router.get('/api/alunos/:id', AlunosController.getOneAluno);
router.put('/api/purchase/:id', AlunosController.purchaseBook);
router.post('/auth/register', AlunosController.cadastro);
router.post('/auth/login', AlunosController.login);

module.exports = router;