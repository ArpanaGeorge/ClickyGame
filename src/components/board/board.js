import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'brinjal',
        img: 'img/250x180/brinjal.JPG',
        clicked: false
    },
    {
        name: 'chocobar',
        img: 'img/250x180/chocobar.JFIF',
        clicked: false
    },
    {
        name: 'duck',
        img: 'img/250x180/duck.JFIF',
        clicked: false
    },
    {
        name: 'heart',
        img: 'img/250x180/heart.PNG',
        clicked: false
    },
    {
        name: 'brain',
        img: 'img/250x180/brain.JPG',
        clicked: false
    },
    {
        name: 'bear',
        img: 'img/250x180/bear.JFIF',
        clicked: false
    },
    {
        name: 'baby2',
        img: 'img/250x180/baby2.JFIF',
        clicked: false
    },
    {
        name: 'hotdog',
        img: 'img/250x180/hotdog.jfif',
        clicked: false
    },
    {
        name: 'hippo',
        img: 'img/250x180/hippo.JFIF',
        clicked: false
    },
    {
        name: 'chilli',
        img: 'img/250x180/chilli.JFIF',
        clicked: false
    },
    {
        name: 'cow',
        img: 'img/250x180/cow.JFIF',
        clicked: false
    },
    {
        name: 'lettuce',
        img: 'img/250x180/lettuce.JPG',
        clicked: false
    },
    {
        name: 'mango',
        img: 'img/250x180/mango.JFIF',
        clicked: false
    },
    {
        name: 'pig',
        img: 'img/250x180/pig.JFIF',
        clicked: false
    },
    {
        name: 'potato',
        img: 'img/250x180/potato.JFIF',
        clicked: false
    },
    {
        name: 'cat',
        img: 'img/250x180/cat.JFIF',
        clicked: false
    },
    {
        name: 'dog',
        img: 'img/250x180/dog.Png',
        clicked: false
    },
    {
        name: 'cow2',
        img: 'img/250x180/cow2.JFIF',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>Now focus... just one click per character</h4>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}