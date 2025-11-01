const notesService = require('./notes.service');

exports.viewNotes = async (req, res)=>{

    try{
        const notes = await notesService.viewNotes(req.user.id);
        res.status(200).json(notes);
    }catch(error){
        res.status(500).send('Internal Server Error');
    }
}

exports.addNote = async (req, res)=>{
    try{
        const note = await notesService.addNote(req.body, req.user.id);
        res.status(201).json(note);
    }catch(error){
        res.status(500).send('Internal Server Error');
    }
}

exports.deleteNote = async (req, res)=>{
    try{
        const result = await notesService.deleteNote(req.params.id);
        res.status(200).json({message: 'Note deleted successfully', result});
    }catch(error){
        res.status(500).send('Internal Server Error');
    }
}

exports.viewArchiveNotes = async (req, res)=>{
    try{
        const notes = await notesService.viewArchiveNotes(req.user.id);
        res.status(200).json(notes);
    }catch(error){
        res.status(500).send('Internal Server Error');
    }
}

exports.viewPinNotes = async (req, res)=>{
    try{
        const notes = await notesService.viewPinedNotes(req.user.id);
        res.status(200).json(notes);
    }catch(error){
        res.status(500).send('Internal Server Error');
    }
}

exports.viewDeletedNotes = async (req, res)=>{
    try{
        const notes = await notesService.viewDeletedNotes(req.user.id);
        res.status(200).json(notes);
    }catch(error){
        res.status(500).send('Internal Server Error');
    }
}

exports.pinNote = async (req, res)=>{
    try{
        const result = await notesService.pinNote(req.params.id);   
        res.status(200).json({message: 'Note pinned successfully', result});
    }catch(error){
        res.status(500).send('Internal Server Error');
    }
}

exports.archiveNote = async (req, res)=>{
    try{
        const result = await notesService.archiveNote(req.params.id);
        res.status(200).json({message: 'note archived successfully', result})
    } catch ( err ) {
        res.status(500).send('internal server error');
    }
}
