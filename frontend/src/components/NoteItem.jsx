import {useSelector} from 'react-redux'
function NoteItem({note}) {
	const {user} = useSelector((state) => state.auth)
	return (
		<div className='note' >
		<div>{new Date(note.createdAt).toLocaleString('en-US')}</div>
		<div>{note.text}</div>
		</div>
		)
}
export default NoteItem