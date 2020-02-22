import CONFIG from '../graph/graph.config';
import CONST from '../const';

export default {
    ARC: {
        START_ANGLE: 0,
        END_ANGLE: 2 * Math.PI
    },
    DEFAULT_NODE_SIZE: CONFIG.node.size,
    NODE_LABEL_DX: '1.2em',
    NODE_LABEL_DY: '.4em',
    ...CONST
};
