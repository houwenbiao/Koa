const config = require('./util/config');
let koa = require('koa');
let app = new koa();
let router = require('koa-router')();
const Sequelize = require('sequelize');
// CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。
// 下面以koa2-cors为例，
const cors = require('koa2-cors');
var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 30000
        }
    });

var DeviceAttrib = sequelize.define('device_attrib', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
    },
    mac: {
        type: Sequelize.DataTypes.STRING,
        field: 'mac',
    },
    type: {
        type: Sequelize.DataTypes.STRING,
        field: 'type',
    }
}, {
    timestamps: false,
    freezeTableName: true,
});

// 具体参数我们在后面进行解释
app.use(cors({
    origin: function (ctx) {
        return "*"; // 允许来自所有域名请求
    },
    // exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

router.get('/devicesJoined', async (ctx, next) => {
    await next();
    ctx.response.body = {
        devices: [
            {
                "type": "dimmer",
                "id": "00124b0017c621af",
                "name": "dev-993d",
                "status": {
                    'level': "100",
                    'hue': "80",
                    'sat': "80",
                    'onoff': "1"
                }
            },
            {
                "type": "irda",
                "id": "111",
                "name": "客厅",
                "status": "否"
            },
            {
                "type": "irda",
                "id": "112",
                "name": "厨房",
                "status": "是"
            },
            {
                "type": "luxmeter",
                "id": "311",
                "name": "客厅",
                "status": "145667"
            },
            {
                "type": "luxmeter",
                "id": "312",
                "name": "厨房",
                "status": "98768"
            },
            {
                "type": "microwave",
                "id": "112",
                "name": "厨房",
                "status": "否"
            },
            {
                "type": "microwave",
                "id": "113",
                "name": "厨房",
                "status": "否"
            },
            {
                "type": "breaker",
                "id": "811",
                "name": "区域1",
                "status": [
                    {
                        "cid": "811-1",
                        "state": 0,
                        "temp": 45,
                        "voltage": 220,
                        "power": 100,
                        "current": 9,
                        "leakCurrent": 2,
                        "energy": 300,
                        "waring": "否",

                    },
                    {
                        "cid": "811-2",
                        "state": 0,
                        "temp": 45,
                        "voltage": 220,
                        "power": 100,
                        "current": 9,
                        "leakCurrent": 2,
                        "energy": 300,
                        "waring": "否",
                    },
                ]
            },
            {
                "type": "breaker",
                "id": "812",
                "name": "区域2",
                "status": [
                    {
                        "cid": "812-1",
                        "state": 0,
                        "temp": 45,
                        "voltage": 220,
                        "power": 100,
                        "current": 9,
                        "leakCurrent": 2,
                        "energy": 300,
                        "waring": "否",

                    },
                    {
                        "cid": "812-2",
                        "state": 0,
                        "temp": 45,
                        "voltage": 220,
                        "power": 100,
                        "current": 9,
                        "leakCurrent": 2,
                        "energy": 300,
                        "waring": "否",
                    },
                    {
                        "cid": "812-3",
                        "state": 1,
                        "temp": 45,
                        "voltage": 220,
                        "power": 100,
                        "current": 9,
                        "leakCurrent": 2,
                        "energy": 300,
                        "waring": "否",
                    },
                    {
                        "cid": "812-4",
                        "state": 1,
                        "temp": 45,
                        "voltage": 220,
                        "power": 100,
                        "current": 9,
                        "leakCurrent": 2,
                        "energy": 300,
                        "waring": "否",
                    },
                    {
                        "cid": "812-5",
                        "state": 1,
                        "temp": 45,
                        "voltage": 220,
                        "power": 100,
                        "current": 9,
                        "leakCurrent": 2,
                        "energy": 300,
                        "waring": "否",
                    },
                    {
                        "cid": "812-6",
                        "state": 1,
                        "temp": 45,
                        "voltage": 220,
                        "power": 100,
                        "current": 9,
                        "leakCurrent": 2,
                        "energy": 300,
                        "waring": "否",
                    },
                    {
                        "cid": "812-7",
                        "state": 1,
                        "temp": 45,
                        "voltage": 220,
                        "power": 100,
                        "current": 9,
                        "leakCurrent": 2,
                        "energy": 300,
                        "waring": "否",
                    },
                    {
                        "cid": "812-8",
                        "state": 1,
                        "temp": 45,
                        "voltage": 220,
                        "power": 100,
                        "current": 9,
                        "leakCurrent": 2,
                        "energy": 300,
                        "waring": "否",
                    },
                ]
            }]
    }
});

router.get('/searched', async (ctx, next) => {
    await next();
    ctx.response.body = {
        devices: [
            {
                "type": "irda",
                "id": "111",
                "name": "客厅",
                "status": "否"
            },
            {
                "type": "irda",
                "id": "112",
                "name": "厨房",
                "status": "是"
            },
            {
                "type": "luxmeter",
                "id": "311",
                "name": "客厅",
                "status": "145667"
            },
            {
                "type": "luxmeter",
                "id": "312",
                "name": "厨房",
                "status": "98768"
            },
            {
                "type": "microwave",
                "id": "112",
                "name": "厨房",
                "status": "否"
            },
            {
                "type": "microwave",
                "id": "113",
                "name": "厨房",
                "status": "否"
            },
            {
                "type": "dimmer",
                "id": "00124b0017c621af",
                "name": "dev-993d",
                "status": {
                    'level': "100",
                    'hue': "80",
                    'sat': "80",
                    'onoff': "1"
                }
            }
        ]
    }
});
router.get('/allowJoin', async (ctx, next) => {
    await next();
    ctx.response.body = 'success'
});
router.get('/query.cgi', async (ctx, next) => {
    await next();
    let cmd = ctx.query.cmd;
    console.log(cmd);
    switch (cmd) {
        case "comStatus":
            ctx.response.body = {
                uart_status: 1
            };
            break;
        default:
            ctx.response.body = {
                content: {
                    devices: [
                        {
                            "type": "dimmer",
                            "id": "00124b0017c621af",
                            "name": "dev-993d",
                            "status": {
                                'level': "50",
                                'hue': "80",
                                'sat': "80",
                                'onoff': "1"
                            }
                        },
                        {
                            "type": "irda",
                            "id": "000d6f000cbedb5e",
                            "name": "客厅",
                            "status": "in"
                        },
                        {
                            "type": "irda",
                            "id": "112",
                            "name": "厨房",
                            "status": "是"
                        },

                        {
                            "type": "luxmeter",
                            "id": "311",
                            "name": "客厅",
                            "status": "145667"
                        },
                        {
                            "type": "luxmeter",
                            "id": "312",
                            "name": "厨房",
                            "status": "98768"
                        },
                        {
                            "type": "microwave",
                            "id": "112",
                            "name": "厨房",
                            "status": "否"
                        },
                        {
                            "type": "microwave",
                            "id": "113",
                            "name": "厨房",
                            "status": "否"
                        },
                        {
                            "type": "breaker",
                            "id": "811",
                            "name": "区域1",
                            "status": [
                                {
                                    "cid": "811-1",//子id
                                    "state": 0,//开关状态
                                    "temp": 45,//温度
                                    "voltage": 220,//电压
                                    "power": 100,//功率
                                    "current": 9,//电流
                                    "leakCurrent": 2,//漏电流
                                    "energy": 300,//用电量
                                    "waring": "否",//警告信息
                                },
                                {
                                    "cid": "811-2",
                                    "state": 0,
                                    "temp": 45,
                                    "voltage": 220,
                                    "power": 100,
                                    "current": 9,
                                    "leakCurrent": 2,
                                    "energy": 300,
                                    "waring": "否",
                                },
                            ]
                        }
                    ],
                },
                failure_reason: '',
                response_code: 0,
                response_code_string: '"SUCCESS"',
            };
            break;
    }

});
router.get('/control.cgi', async (ctx, next) => {
    await next();
    let cmd = ctx.query.cmd;
    console.log(cmd);
    switch (cmd) {
        case "rename":
            ctx.response.body = {
                status: 'OK'
            };
            break;
        default:
            ctx.response.body = {
                status: 'OK'
            };
            break;
    }

});
router.post('/uart', async (ctx, next) => {
    await next();
    ctx.response.body = 'success'
});
router.put('uart', async (ctx, next) => {
    await next();
    ctx.response.body = 'success'
});

router.get('/gateway/uart', async (ctx, next) => {
    await next();
    ctx.response.body = {
        content: {
            bps: "19200",
            cb: "None",
            com: "com1",
            db: "8",
            gw_name: "网关2",
            sb: "1",
        },
        failure_reason: '',
        response_code: 0,
        response_code_string: '"SUCCESS"',
    }
});
router.get('/add', async (ctx, next) => {
    let res;
    await DeviceAttrib.create({
        mac: '0005',
        type: 'dimmer',
    }).then(p => {
        res = 'insert success';
        console.log('insert success');
    }).catch(err => {
        res = 'insert error';
        console.log('insert error');
    });
    ctx.response.body = res;
});
router.get('/query', async (ctx, next) => {
    let devices = await DeviceAttrib.findAll({where:{
        type:'dimmer',
    }});
    devices.forEach((device) => {
        console.log(JSON.stringify(device));
    });
    ctx.response.body = devices;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(5125);
console.log('服务开启');