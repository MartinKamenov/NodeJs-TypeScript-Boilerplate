const express = require('express');
const app = express();

import SetupConfiguration from '../setup/setupConfiguration';
import responseInterface from '../models/server/responseInterface';

const start = (setupConfiguration: SetupConfiguration) => {
    app.get('/home', (req: any, res: responseInterface) => {
        res.send('Home');
    });
    
    app.listen(setupConfiguration.port, () => console.log(setupConfiguration.message));
};

const port: String = process.env.PORT || '5000';
start(new SetupConfiguration(port, `Magic is running on ${port}`));
