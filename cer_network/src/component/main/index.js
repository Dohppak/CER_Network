import React, { useState, useEffect } from 'react';
import useNetwork from '../../hook';
import D3Graph from '../../D3Graph/D3Graph';
import dummy from '../../utils/data';
import { createConfig } from '../../D3Graph/D3Graph.config';
import { RenderArea } from '../../styles';


export default function Main() {
    const { setActivateNode, loadGraphData, data } = useNetwork();
    const [ loading, setLoading ] = useState(true);
    const [ config, setConfig ] = useState({
    });
    const graphConfig = createConfig({
        isDarkTheme: false,
        node: {
            symbolType: 'diamond'
        },
        link: {
            opacityKey: 'strength',
        },
        graph: {
            symbolKey: 'Group',
            colorKey: 'Group',
            symbolMapper: {
                'word': 'circle',
                'project': 'circle',
                'artist': 'circle',
            },
            colorMapper: {
                'artist': '#ff00de',
                'project': '#2a00ff',
                'word': 'gray'
            }
        }
    });

    useEffect(() => {
        handleLoadData();
    }, [])

    async function handleLoadData(){
        setConfig(graphConfig);
        await loadGraphData();
        setLoading(false);
    }
    
    return (
        <RenderArea>
            <D3Graph 
                data={data}
                config={config}
                loading={loading}
                setActivateNode={setActivateNode}
            />
        </RenderArea>
    )

}