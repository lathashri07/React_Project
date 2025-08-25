import ProfilePic from  './profile.jpg'

function MyCard() {
    return (
        <div className="card">
            <img className='img' src={ProfilePic} alt="Card Image" />
            <h2>Lathashri K H</h2>
            <p>Curious CSE student who loves coding and creating.</p>
        </div>
    )

}
export default MyCard;