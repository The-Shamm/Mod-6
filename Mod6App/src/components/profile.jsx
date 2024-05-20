import PropTypes from 'prop-types'

function Profile ({profile, onChange}) {

    return (
        <>
            <fieldset id="profile">
                <legend>Profile</legend>
                <div>
                    <textarea onChange={onChange} name="about" cols="30" rows="10" value={profile[0].text} placeholder="About yourself"></textarea>
                </div>
            </fieldset>
        </>
    )
}

Profile.propTypes = {
    profile: PropTypes.array,
    onChange: PropTypes.func
}

export default Profile