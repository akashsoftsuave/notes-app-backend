const express = require('express');
const Router = express.Router();
const validator = require('../controllers/auth/auth.validator');
const authController = require('../controllers/auth/auth.controller');
const notesController = require('../controllers/notes/notes.controller');
const authMiddleware = require('../middleware/authmiddleware');

Router.post("/login", validator.loginValidator, authController.login);
Router.post("/register", validator.registerValidator, authController.register);

Router.get("/viewNotes", authMiddleware, notesController.viewNotes);
Router.post("/addNote", authMiddleware, notesController.addNote);
Router.delete("/deleteNote/:id", authMiddleware, notesController.deleteNote);
Router.get("/archiveNotes", authMiddleware, notesController.viewArchiveNotes);
Router.get("/pinNotes", authMiddleware, notesController.viewPinNotes);
Router.get("/deletedNotes", authMiddleware, notesController.viewDeletedNotes);

module.exports = Router;
