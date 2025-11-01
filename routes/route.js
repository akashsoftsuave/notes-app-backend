const express = require('express');
const Router = express.Router();
const validator = require('../controllers/auth/auth.validator');
const authController = require('../controllers/auth/auth.controller');
const notesController = require('../controllers/notes/notes.controller');
const authMiddleware = require('../middleware/authmiddleware');
const notesValidator = require('../controllers/notes/notes.validator');

Router.post("/login", validator.loginValidator, authController.login);
Router.post("/register", validator.registerValidator, authController.register);

Router.get("/viewNotes", authMiddleware, notesController.viewNotes);
Router.post("/addNote", authMiddleware, notesValidator.addNotes, notesController.addNote);
Router.get("/ViewarchiveNotes", authMiddleware, notesController.viewArchiveNotes);
Router.get("/ViewpinNotes", authMiddleware, notesController.viewPinNotes);
Router.get("/ViewdeletedNotes", authMiddleware, notesController.viewDeletedNotes);

Router.post("/pinNotes/:id", authMiddleware, notesController.pinNote);
Router.delete("/deleteNote/:id", authMiddleware, notesController.deleteNote);
Router.post('/archiveNotes/:id', authMiddleware, notesController.archiveNote);

module.exports = Router;
