import React from 'react';
import './mainContentStyles.css'

function MainContent () {
    const publications = [
        {
            id: '1',
            owner: 'Alejandro100',
            content: 'How did you become an expert in this and what time did you take it?',
            answer: 'Around one year i was studying by myself and other courses trhowed on internet....',
            comments: []
        },
        {
            id: '2',
            owner: 'JuanDev',
            content: 'How did you become an expert in this and what time did you take it?',
            answer: 'Around one year i was studying by myself and other courses trhowed on internet....',
            comments: []
        },
        {
            id: '3',
            owner: 'MariasSecret',
            content: 'How did you become an expert in this and what time did you take it?',
            answer: 'Around one year i was studying by myself and other courses trhowed on internet....',
            comments: []
        },
        {
            id: '4',
            owner: 'Alejandro100',
            content: 'How did you become an expert in this and what time did you take it?',
            answer: 'Around one year i was studying by myself and other courses trhowed on internet....',
            comments: []
        }
    ]
    
    return (
        <div className='mainContent'>
          { publications &&
            publications.map(pub => (
              <div className='answer'>
              <p>{pub.owner}</p>
              <p>{pub.content}</p>
              <p>{pub.answer}</p>
              <button>+</button>
          </div> 
          )
          )}
        </div>
    )
}
export default MainContent;