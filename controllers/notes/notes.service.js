const Notes = require('../../models/notes.model');

exports.viewNotes = async (userId)=>{
    try{
        const notes = await Notes.findAll({where: {userid: userId, isDeleted: 0, archive: 0, pin:0}});
        return notes;
    }catch(error){
        throw error;
    }
}


exports.addNote = async (noteData, userId)=>{
    try{
        const notes = {
            title: noteData.title,
            description: noteData.description,
            userid: userId
        }
        const note = await Notes.create(notes);
        return note;
    } catch(error){
        throw error;
    }
}

exports.deleteNote = async (noteId)=>{
    try{
        const result = await Notes.update({isDeleted: 1}, {where: {id: noteId}});
        return result;
    } catch(error){
        throw error;
    }   
}

exports.viewArchiveNotes = async () => {
    try{
        const result = await Notes.findAll({where:{archive : 1, isDeleted:0 }});
        return result;
    }catch (err){
        throw err;
    }
}

exports.viewDeletedNotes = async () => {
    try{
        const result = await Notes.findAll({where:{isDeleted:1 }});
        return result;
    }catch (err){
        throw err;
    }
}

exports.viewPinedNotes = async () => {
    try{
        const result = await Notes.findAll({where:{isDeleted:0, pin:1, archive:0 }});
        return result;
    }catch (err){
        throw err;
    }
}