import SetupConfiguration from '../setup/setupConfiguration';
import expressApp from '../models/server/expressApp';
import responseInterface from '../models/server/responseInterface';
import requestInterface from '../models/server/requestInterface';

const express: Function = require('express');
const app: expressApp = express();

const start = (setupConfiguration: SetupConfiguration) => {
    app.get('/home', (req: requestInterface, res: responseInterface) => {
        res.send('Home');
    });
    
    app.listen(setupConfiguration.port, () => console.log(setupConfiguration.message));
};

const port: String = process.env.PORT || '5000';
start(new SetupConfiguration(port, `Magic is running on ${port}`));
