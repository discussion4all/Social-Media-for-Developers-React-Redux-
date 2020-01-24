import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {getGithubRepos} from '../../actions/profile'

const ProfileGithub = ({username, getGithubRepos, repos}) => {
    useEffect(()=>{
        getGithubRepos(username);
    }, [getGithubRepos])
    return (
        <div className="profile-github">
            <h2 className="text-primary my-1">Github Repos</h2>
            {repos === null ? <h1>loading</h1>: (
                repos.map(repo => (
                    <div key={repo._id} className="repo bg-white p-1 my-1">
                        <h4>
                            <a href={repo.html_url} target='_blank' rel="noopener noreferrer">
                                {repo.name}
                            </a>
                        </h4>
                    <p>{repo.description}</p>
                    </div>
                ))
            )}
        </div>
    )
}

ProfileGithub.propTypes = {
    getGithubRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired,
}

const mapStateToProp = state => ({
    repos: state.profile.repos
})

export default connect(mapStateToProp, {getGithubRepos})(ProfileGithub)
