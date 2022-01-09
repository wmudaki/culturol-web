import * as React from 'react';
import {View, useWindowDimensions, Text, Pressable} from "react-native-web";
import Ionicons from "react-native-vector-icons/dist/Ionicons.js";
import Feather from "react-native-vector-icons/dist/Feather.js";
import LinearGradient from "react-native-web-linear-gradient";

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
                    props.tab === 'centers' || props.tab === 'home'
                    ? <Pressable
                            style={ state => [{
                                height: 70,
                                width: 70,
                                borderRadius: 50,
                                backgroundColor: state.hovered ? '#0f0': '#ff0092',
                                // position: 'absolute',
                                // alignSelf: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: 10,
                                boxShadow: '1px 1px 10px'
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
                    props.tab === 'centers' || props.tab === 'contact'
                    ? <Pressable
                            style={ state => [{
                                height: 70,
                                width: 70,
                                borderRadius: 50,
                                backgroundColor: state.hovered ? '#f00': '#004',
                                // position: 'absolute',
                                // alignSelf: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: 10,
                                boxShadow: '1px 1px 10px '
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

function Content(props){
    const [color, setColor] = React.useState(['#900', '#000', '#000']);
    let colors = [
            ['#900', "#500",'#000',],
            ['#900', '#000', '#000'],
            ['#900', '#000']
    ]
    // React.useEffect(() => timer(), [])

    function timer(){
        setInterval(() => setColor(colors[Math.floor(Math.random() * 3)]), 10000 )
    }

    return(
        <>
            <LinearGradient
                colors={color}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
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
                    Our Future The Culturol Way
                </Text>
                <Text
                    style={{
                        fontFamily: 'Comfortaa-Medium',
                        textAlign: 'center',
                        fontSize: 35,
                        margin: 30,
                        color: '#ff0092'
                    }}
                >
                    The future the Artificial Intelligence way
                </Text>

            </LinearGradient>
        </>
    )
}
function NavBar(props) {
    const [tab, setTab] = React.useState('home');
    return(
        <>
            <View
                style={{
                    height: props.height * 0.12,
                    backgroundColor: '#900',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'

                }}
            >
                <Text
                    style={{
                        fontSize: 30,
                        color: '#fff',
                        margin: 10,
                        fontFamily: 'Comfortaa-Bold'
                    }}
                >
                    Culturol
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        margin: 10,
                    }}
                >
                    <Pressable
                        onPress={() => setTab('home')}
                        style={ state => [{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: props.width * 0.1,
                            backgroundColor:state.hovered || tab === 'home' ?  '#ff0092' : null,
                            boxShadow: state.hovered || tab === 'home' ? '1px 1px 10px #800' : null,
                            borderWidth:state.hovered || tab === 'home' ? null : 3,
                            borderColor: '#888',
                            margin: 15,
                            padding: 10,
                        }]}
                    >
                        <Feather
                            name={'home'}
                            size={25}
                            color={'#fff'}
                        />
                        <Text
                            style={{
                                fontFamily: 'Comfortaa-Bold',
                                fontSize: 20,
                                color: '#fff',
                                marginLeft: 10,
                            }}
                        >
                            Home
                        </Text>
                    </Pressable>
                    <Pressable
                        onPress={() => setTab('centers')}
                        style={ state => [{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: props.width * 0.1,
                            backgroundColor:state.hovered || tab === 'centers' ? '#ff0092' : null,
                            boxShadow: state.hovered || tab === 'centers' ? '1px 1px 10px #800' : null,
                            borderWidth: state.hovered || tab === 'centers' ? null : 3,
                            borderColor: '#888',
                            margin: 15,
                            padding: 10,
                        }]}
                    >
                        <Ionicons
                            name={'bulb-outline'}
                            size={25}
                            color={'#fff'}
                        />
                        <Text
                            style={{
                                fontFamily: 'Comfortaa-Bold',
                                fontSize: 20,
                                color: '#fff',
                                marginLeft: 10,
                            }}
                        >
                            Centers
                        </Text>
                    </Pressable>
                    <Pressable
                        onPress={() => setTab('contact')}
                        style={ state => [{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: props.width * 0.1,
                            backgroundColor:state.hovered || tab === 'contact' ? '#ff0092' : null,
                            boxShadow: state.hovered || tab === 'contact' ? '1px 1px 10px #800' : null,
                            borderWidth: state.hovered || tab === 'contact' ? null : 3,
                            borderColor: '#888',
                            margin: 15,
                            padding: 10,
                        }]}
                    >
                        <Feather
                            name={'phone-call'}
                            size={25}
                            color={'#fff'}
                        />
                        <Text
                            style={{
                                fontFamily: 'Comfortaa-Bold',
                                fontSize: 20,
                                color: '#fff',
                                marginLeft: 10,
                            }}
                        >
                            Contact
                        </Text>
                    </Pressable>

                </View>

            </View>
        </>
    )
}
function Home(props) {
    const {width, scale, height} = useWindowDimensions();
    return(
        <>
            <View
                style={{
                    backgroundColor: 'azure',
                    height: height,
                }}
            >
                <NavBar {...props} width={width} scale={scale} height={height}/>
                <Content {...props} />
                <NavButtons {...props} />


            </View>
        </>
    )
}

export default Home;
