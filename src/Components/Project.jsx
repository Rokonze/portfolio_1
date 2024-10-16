import Dgball from '../public/dgball.png'
import UserFinder from '../public/userFinder.png'

export default function Project ({type}) {

    switch (type) {
        case 'dgball':
            return (
                <div className='space-y-4 max-w-96'>
                    
                    <img src={Dgball} alt="DgBall Project" className='lg:size-96 size-76 rounded-3xl shadow-lg mb-4'/>
                    <a href="https://dgball.netlify.app" target='_blank' rel="noopener noreferrer" className='text-xl font-semibold '>DGBALL</a>
                    <p>This is a project done in Vanilla JavaScript. It has a physics system built from scrath and allows playing a game locally between 2 players.</p>
                </div>
                
            ) 
            break;
        case 'userfinder':
            return (
                <div className='space-y-4 max-w-96'>
                    
                    <img src={UserFinder} alt="UserFinder Project" className='lg:size-96 size-76 rounded-3xl shadow-lg mb-4'/>
                    <a href="https://github-user-finder-i.netlify.app" target='_blank' rel="noopener noreferrer" className='text-xl font-semibold '>GITHUB USER FINDER</a>
                    <p>This website uses the Github API in order to fetch data from Github users. The website is done using React and Tailwind CSS</p>
                </div>
                
            )
            break;
    }

    
}