import * as React from 'react';
import {View, useWindowDimensions, Text, Pressable, ImageBackground, Image} from "react-native-web";
import Ionicons from "react-native-vector-icons/dist/Ionicons.js";
import Feather from "react-native-vector-icons/dist/Feather.js";
import LinearGradient from "react-native-web-linear-gradient";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setTab} from "../state/appActions";
import future from '../assets/images/back.jpg'
import ReactMarkdown from 'react-markdown'

function NavButtons(props) {
    return(
        <>
            <View
                style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    bottom: 20,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {
                    props.app.tab === 'centers' || props.app.tab === 'home'
                    ? <Pressable
                        onPress={() => {
                            if (props.app.tab === 'home'){
                                props.setTab('centers')
                            } else if (props.app.tab === 'centers'){
                                props.setTab('contact')
                            }
                        }}

                        style={ state => [{
                            height: 70,
                            width: 70,
                            borderRadius: 50,
                            backgroundColor: state.hovered ? '#888': null,
                            // position: 'absolute',
                            // alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 10,
                            // boxShadow: '1px 1px 10px'
                        }]}
                        >
                            <Feather
                                name={'chevrons-down'}
                                size={40}
                                color={'#fff'}
                            />


                        </Pressable>
                        : null
                }
                {
                    props.app.tab === 'centers' || props.app.tab === 'contact'
                    ? <Pressable
                        onPress={() => {
                            if (props.app.tab === 'contact'){
                                props.setTab('centers')
                            } else if (props.app.tab === 'centers'){
                                props.setTab('home')
                            }
                        }}

                        style={ state => [{
                            height: 70,
                            width: 70,
                            borderRadius: 50,
                            backgroundColor: state.hovered ? '#888': null,
                            // position: 'absolute',
                            // alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 10,
                            // boxShadow: '1px 1px 10px '
                        }]}
                        >
                            <Feather
                                name={'chevrons-up'}
                                size={40}
                                color={'#fff'}
                            />
                        </Pressable>
                        : null
                }
            </View>
        </>
    )
}

function Products(props){
  let mark = `# Welcome to Culturol

## About Us

Culturol is a trailblazing force in the realm of Bioinformatics and AI-driven research technology. We fuse the power of cutting-edge technology with the intricacies of life sciences to revolutionize the landscape of discovery. Our mission is to empower researchers, scientists, and institutions in the fields of Bioinformatics and AI research, driving breakthroughs that shape the future of healthcare, biotechnology, and beyond.

## Our Vision

To be the catalyst for transformative discoveries at the intersection of Bioinformatics and AI, propelling scientific understanding and medical progress to unprecedented heights.

## What We Do

1. **Advanced Bioinformatics Solutions:** Our team of seasoned bioinformaticians and data scientists harness the potential of complex biological data. From genomic analysis to protein structure prediction, we develop tailored software solutions that unravel biological mysteries and enable data-driven insights.

2. **AI-Powered Analysis Tools:** Dive into the realm of AI-guided research with our state-of-the-art tools. Our AI models are designed to analyze intricate biological datasets, identifying patterns, predicting outcomes, and offering a deeper understanding of biological processes.

3. **Genomic Data Integration:** We specialize in harmonizing diverse genomic datasets. Our integration techniques enable researchers to combine and analyze data from multiple sources, providing a comprehensive perspective on genetic variations and their implications.

4. **Precision Medicine Support:** The future of healthcare lies in precision medicine. Our services aid in tailoring medical treatments to individual genetic profiles, making healthcare more effective, personalized, and impactful.

5. **Training and Workshops:** We're not just a technology provider; we're your partners in navigating the complexities of Bioinformatics and AI. Our training programs equip you with the skills to leverage these technologies effectively in your research journey.

## Why Choose Culturol

1. **Bioinformatics Expertise:** Our team brings deep domain knowledge in both Bioinformatics and AI, ensuring solutions that are not only technologically advanced but also scientifically sound.

2. **AI Innovations for Life Sciences:** We stand at the forefront of AI innovations that are reshaping life sciences. Partnering with us means harnessing AI's potential to decode biological mysteries.

3. **Tailored to Your Needs:** We understand the nuances of Bioinformatics and AI research. Our solutions are tailored to your specific challenges and objectives, ensuring meaningful outcomes.

4. **Cross-Disciplinary Collaboration:** We foster collaboration between bioinformaticians, biologists, and AI specialists. This collaborative approach ensures well-rounded solutions that bridge the gap between technology and life sciences.

5. **Ethics and Excellence:** We uphold the highest ethical standards and strive for excellence in all endeavors. Your research's integrity and success are our top priorities.

Join us at Culturol on a journey to unravel the mysteries of life through Bioinformatics and AI. Let's pioneer a new era of scientific understanding, medical breakthroughs, and transformative progress.

*Decoding Life's Complexity, One Algorithm at a Time - Culturol*
`
    return(
        <>
            <View style={{
                flex: 1,
                // alignItems: 'center',
                // justifyContent: 'center',
            }}>
                <Text style={{
                    fontFamily: 'Comfortaa-Bold',
                    textAlign: 'center',
                    fontSize: 60,
                    color: '#fff'
                }}>
                    About Us
                </Text>
              <View style={{
                width: '60%',
                alignSelf: 'center',
                margin: 20
              }}>
                <ReactMarkdown
                  components={{
                    p: ({node, ...props}) => <p style={{color: '#fff', fontFamily: 'Comfortaa-Medium',fontSize: 19}} {...props} />
                  }}
                  children={mark}/>
              </View>

            </View>
        </>
    )
}
function Contact(props){
  return(
    <>
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={{
          fontFamily: 'Comfortaa-Bold',
          textAlign: 'center',
          fontSize: 60,
          color: '#fff',
          margin: 70
        }}>
          Contact Us
        </Text>
        <View>
          <Text style={{
            fontFamily: 'Comfortaa-Bold',
            textAlign: 'center',
            fontSize: 30,
            color: '#000',
            margin: 20,
          }}>
            wom@culturol.com
          </Text>
          <Text style={{
            fontFamily: 'Comfortaa-Bold',
            textAlign: 'center',
            fontSize: 30,
            color: '#000',
            margin: 10,
          }}>
            +254 752 376 488
          </Text>

        </View>

      </View>
    </>
  )
}
function Content(props){
    const [color, setColor] = React.useState(['#000', '#000', '#000']);
    let colors = [
            ['#900', "#500",'#000',],
            ['#900', '#000', '#000'],
            ['#900', '#000']
    ]
    // React.useEffect(() => timer(), [])

    function timer(){
        setInterval(() => setColor(colors[Math.floor(Math.random() * 3)]), 10000 )
    }

    if (props.app.tab === 'centers'){
        return (
            <Products {...props} />
        )
    }
    if (props.app.tab === 'contact'){
      return (
        <Contact {...props} />
      )
    }

    return(
        <>
            <View
                // colors={color}
                // source={{uri: future}}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                    // backgroundColor: '#ff5'
                }}
            >
                <Text
                    style={{
                        fontFamily: 'Comfortaa-Bold',
                        textAlign: 'center',
                        fontSize: 60,
                        color: '#fff'
                    }}
                >
                  Decoding Life's Complexity
                </Text>
                <Text
                    style={{
                        fontFamily: 'Comfortaa-Medium',
                        textAlign: 'center',
                        fontSize: 25,
                        margin: 30,
                        color: '#000'
                    }}
                >
                  One Algorithm at a Time
                </Text>

            </View>
        </>
    )
}
function NavBar(props) {
    const [tab, setTab] = React.useState('home');
    return(
        <>
            <View
                style={{
                    // backgroundColor: '#ff5'
                }}
            >
                <View
                    style={{
                        height: props.height * 0.12,
                        // backgroundColor: '#ff5',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        margin: 30,
                        padding: 20,
                        borderRadius: 50,

                    }}
                >
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Image
                      source={require('../assets/images/culturol-logo.png')}
                      style={{height: 60, width: 60,}}
                    />
                    <Text
                      style={{
                        fontSize: 25,
                        color: '#fff',
                        margin: 10,
                        fontFamily: 'Comfortaa-Bold'
                      }}
                    >
                      Culturol Research Center
                    </Text>
                  </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            margin: 10,
                        }}
                    >
                        <Pressable
                            onPress={() => props.setTab('home')}
                            style={ state => [{
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderRadius: props.width * 0.1,
                                // backgroundColor:state.hovered || props.app.tab === 'home' ?  'maroon' : null,
                                // boxShadow: state.hovered || props.app.tab === 'home' ? '1px 1px 10px #800' : null,
                                // borderWidth:state.hovered || props.app.tab === 'home' ? null : 3,
                                borderColor: '#000',
                                margin: 15,
                                padding: 10,
                            }]}
                        >
                            <Feather
                                name={'home'}
                                size={23}
                                color={'#000'}
                            />
                            <Text
                                style={{
                                    fontFamily: 'Comfortaa-Bold',
                                    fontSize: 18,
                                    color: '#fff',
                                    marginLeft: 10,
                                }}
                            >
                                Home
                            </Text>
                        </Pressable>
                        <Pressable
                            onPress={() => props.setTab('centers')}
                            style={ state => [{
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderRadius: props.width * 0.1,
                                // backgroundColor:state.hovered || props.app.tab === 'centers' ? 'maroon' : null,
                                // boxShadow: state.hovered || props.app.tab === 'centers' ? '1px 1px 10px #800' : null,
                                // borderWidth: state.hovered || props.app.tab === 'centers' ? null : 3,
                                borderColor: '#000',
                                margin: 15,
                                padding: 10,
                            }]}
                        >
                            <Ionicons
                                name={'bulb-outline'}
                                size={23}
                                color={'#000'}
                            />
                            <Text
                                style={{
                                    fontFamily: 'Comfortaa-Bold',
                                    fontSize: 18,
                                    color: '#fff',
                                    marginLeft: 10,
                                }}
                            >
                                About
                            </Text>
                        </Pressable>
                        <Pressable
                            onPress={() => props.setTab('contact')}
                            style={ state => [{
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderRadius: props.width * 0.1,
                                // backgroundColor:state.hovered || props.app.tab === 'contact' ? 'maroon' : null,
                                // boxShadow: state.hovered || props.app.tab === 'contact' ? '1px 1px 10px #800' : null,
                                // borderWidth: state.hovered || props.app.tab === 'contact' ? null : 3,
                                borderColor: '#000',
                                margin: 15,
                                padding: 10,
                            }]}
                        >
                            <Feather
                                name={'phone-call'}
                                size={23}
                                color={'#000'}
                            />
                            <Text
                                style={{
                                    fontFamily: 'Comfortaa-Bold',
                                    fontSize: 18,
                                    color: '#fff',
                                    marginLeft: 10,
                                }}
                            >
                                Contact
                            </Text>
                        </Pressable>

                    </View>

                </View>
            </View>
        </>
    )
}
function Home(props) {
    const {width, scale, height} = useWindowDimensions();
    return(
        <>
            <LinearGradient
                colors={['#000', '#fff']}
                // locations={[0.4, 0.7, ]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                // source={{uri: future}}
                blurRadius={0}
                style={{
                    // backgroundColor: '#ff5',
                  minHeight: height
                    // height: height,
                    // flex: 1,
                }}
            >

                <NavBar {...props} width={width} scale={scale} height={height}/>
                <Content {...props} />
                {/*<NavButtons {...props} />*/}


            </LinearGradient>
        </>
    )
}

const mapStateToProps = (state) => {
    const {app} = state;
    return {app};
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setTab,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
