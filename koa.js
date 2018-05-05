var koa = require('koa');
var app = new koa();
var router = require('koa-router')();
// CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。
// 下面以koa2-cors为例，
const cors = require('koa2-cors');

// 具体参数我们在后面进行解释
app.use(cors({
    origin: function (ctx) {
        return "*"; // 允许来自所有域名请求
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

router.get('/devicesJoined', async (ctx, next) => {
    await next();
    ctx.response.body = {
        devices: [
            {
                "type": "irda_sensor",
                "id": "111",
                "name": "客厅",
                "status": "否"
            },
            {
                "type": "irda_sensor",
                "id": "112",
                "name": "厨房",
                "status": "是"
            },
            {
                "type": "dimmer_sensor",
                "id": "211",
                "name": "客厅",
                "status": "0"
            },
            {
                "type": "dimmer_sensor",
                "id": "212",
                "name": "厨房",
                "status": "68"
            },
            {
                "type": "light_sensor",
                "id": "311",
                "name": "客厅",
                "status": "145667"
            },
            {
                "type": "light_sensor",
                "id": "312",
                "name": "厨房",
                "status": "98768"
            },
            {
                "type": "microwave_sensor",
                "id": "112",
                "name": "厨房",
                "status": "否"
            },
            {
                "type": "microwave_sensor",
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
                        "cid":"811-1",
                        "state":0,
                        "temp":45,
                        "voltage":220,
                        "power":100,
                        "current":9,
                        "leakCurrent":2,
                        "energy":300,
                        "waring":"否",

                    },
                    {
                        "cid":"811-2",
                        "state":0,
                        "temp":45,
                        "voltage":220,
                        "power":100,
                        "current":9,
                        "leakCurrent":2,
                        "energy":300,
                        "waring":"否",
                    },
                ]
            },
            {
                "type": "breaker",
                "id": "812",
                "name": "区域2",
                "status": [
                    {
                        "cid":"812-1",
                        "state":0,
                        "temp":45,
                        "voltage":220,
                        "power":100,
                        "current":9,
                        "leakCurrent":2,
                        "energy":300,
                        "waring":"否",

                    },
                    {
                        "cid":"812-2",
                        "state":0,
                        "temp":45,
                        "voltage":220,
                        "power":100,
                        "current":9,
                        "leakCurrent":2,
                        "energy":300,
                        "waring":"否",
                    },
                    {
                        "cid":"812-3",
                        "state":1,
                        "temp":45,
                        "voltage":220,
                        "power":100,
                        "current":9,
                        "leakCurrent":2,
                        "energy":300,
                        "waring":"否",
                    },
                    {
                        "cid":"812-4",
                        "state":1,
                        "temp":45,
                        "voltage":220,
                        "power":100,
                        "current":9,
                        "leakCurrent":2,
                        "energy":300,
                        "waring":"否",
                    },
                    {
                        "cid":"812-5",
                        "state":1,
                        "temp":45,
                        "voltage":220,
                        "power":100,
                        "current":9,
                        "leakCurrent":2,
                        "energy":300,
                        "waring":"否",
                    },
                    {
                        "cid":"812-6",
                        "state":1,
                        "temp":45,
                        "voltage":220,
                        "power":100,
                        "current":9,
                        "leakCurrent":2,
                        "energy":300,
                        "waring":"否",
                    },
                    {
                        "cid":"812-7",
                        "state":1,
                        "temp":45,
                        "voltage":220,
                        "power":100,
                        "current":9,
                        "leakCurrent":2,
                        "energy":300,
                        "waring":"否",
                    },
                    {
                        "cid":"812-8",
                        "state":1,
                        "temp":45,
                        "voltage":220,
                        "power":100,
                        "current":9,
                        "leakCurrent":2,
                        "energy":300,
                        "waring":"否",
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
                "type": "irda_sensor",
                "id": "111",
                "name": "客厅",
                "status": "否"
            },
            {
                "type": "irda_sensor",
                "id": "112",
                "name": "厨房",
                "status": "是"
            },
            {
                "type": "dimmer_sensor",
                "id": "211",
                "name": "客厅",
                "status": "18"
            },
            {
                "type": "dimmer_sensor",
                "id": "212",
                "name": "厨房",
                "status": "68"
            },
            {
                "type": "light_sensor",
                "id": "311",
                "name": "客厅",
                "status": "145667"
            },
            {
                "type": "light_sensor",
                "id": "312",
                "name": "厨房",
                "status": "98768"
            },
            {
                "type": "microwave_sensor",
                "id": "112",
                "name": "厨房",
                "status": "否"
            },
            {
                "type": "microwave_sensor",
                "id": "113",
                "name": "厨房",
                "status": "否"
            }]
    }
});
router.get('/allowJoin', async (ctx, next) => {
    await next();
    ctx.response.body = 'success'
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(8881);
console.log('服务开启');