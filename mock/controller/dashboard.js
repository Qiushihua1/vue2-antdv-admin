const Mock = require('mockjs');

const xDataList = {
  day: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
  week: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
  month: Mock.Random.range(1, 31),
  year: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
};

function lineData(type) {
  return Array.from({ length: xDataList[type].length }, () => {
    return Mock.mock('@natural(20,2000)');
  });
}

function rankData() {
  let obj = Mock.mock({
    'name|10': {
      万达店1: '@natural(20,2000)',
      万达店2: '@natural(20,2000)',
      万达店3: '@natural(20,2000)',
      万达店4: '@natural(20,2000)',
      万达店5: '@natural(20,2000)',
      万达店6: '@natural(20,2000)',
      万达店7: '@natural(20,2000)',
      万达店8: '@natural(20,2000)',
      万达店9: '@natural(20,2000)',
      万达店10: '@natural(20,2000)',
      万达店11: '@natural(20,2000)',
      万达店12: '@natural(20,2000)'
    }
  });
  let list = [];
  for (let i in obj.name) {
    list.push({
      area: i,
      value: obj.name[i]
    });
  }
  return list.sort((a, b) => {
    return b.value - a.value;
  });
}

function pieData() {
  let obj = Mock.mock({
    'name|6': {
      酒店: '@natural(100,500)',
      KTV: '@natural(100,500)',
      电影院: '@natural(100,500)',
      网咖: '@natural(100,500)',
      奶茶: '@natural(100,500)',
      火锅: '@natural(100,500)',
      烤肉: '@natural(100,500)',
      服饰: '@natural(100,500)'
    }
  });
  let list = [];
  for (let i in obj.name) {
    list.push({
      name: i,
      value: obj.name[i]
    });
  }
  return list;
}

function hotData() {
  let obj = Mock.mock({
    'name|15': {
      景点1: '@natural(500,2000)',
      景点2: '@natural(500,2000)',
      景点3: '@natural(500,2000)',
      景点4: '@natural(500,2000)',
      景点5: '@natural(500,2000)',
      景点6: '@natural(500,2000)',
      景点7: '@natural(500,2000)',
      景点8: '@natural(500,2000)',
      景点9: '@natural(500,2000)',
      景点10: '@natural(500,2000)',
      景点11: '@natural(500,2000)',
      景点12: '@natural(500,2000)',
      景点13: '@natural(500,2000)',
      景点14: '@natural(500,2000)',
      景点15: '@natural(500,2000)',
      景点16: '@natural(500,2000)',
      景点17: '@natural(500,2000)',
      景点18: '@natural(500,2000)'
    }
  });
  let list = [];
  for (let i in obj.name) {
    list.push({
      name: i,
      value: obj.name[i]
    });
  }
  return list;
}

function moreData() {
  let obj = Mock.mock({
    'name|6': {
      景点1: '@natural(500,2000)',
      景点2: '@natural(500,2000)',
      景点3: '@natural(500,2000)',
      景点4: '@natural(500,2000)',
      景点5: '@natural(500,2000)',
      景点6: '@natural(500,2000)',
      景点7: '@natural(500,2000)',
      景点8: '@natural(500,2000)',
      景点9: '@natural(500,2000)',
      景点10: '@natural(500,2000)',
      景点11: '@natural(500,2000)',
      景点12: '@natural(500,2000)',
      景点13: '@natural(500,2000)',
      景点14: '@natural(500,2000)',
      景点15: '@natural(500,2000)',
      景点16: '@natural(500,2000)'
    }
  });
  let list = [];
  for (let i in obj.name) {
    let random = Math.floor(Math.random() * obj.name[i]);
    list.push({
      name: i,
      male: random,
      female: obj.name[i] - random,
      value: obj.name[i]
    });
  }
  return list;
}

module.exports = [
  {
    url: '/dashboard/lineChart',
    type: 'post',
    response: config => {
      const { type } = config.body;
      return {
        data: {
          xData: xDataList[type],
          yData: lineData(type),
          lastData: lineData(type)
        },
        code: 200,
        message: '数据获取成功'
      };
    }
  },
  {
    url: '/dashboard/rankData',
    type: 'post',
    response: config => {
      return {
        data: rankData(),
        code: 200,
        message: '数据获取成功'
      };
    }
  },
  {
    url: '/dashboard/pieTypeData',
    type: 'post',
    response: config => {
      return {
        data: pieData(),
        code: 200,
        message: '数据获取成功'
      };
    }
  },
  {
    url: '/dashboard/hotSearchData',
    type: 'post',
    response: config => {
      return {
        data: hotData(),
        code: 200,
        message: '数据获取成功'
      };
    }
  },
  {
    url: '/dashboard/moreData',
    type: 'post',
    response: config => {
      return {
        data: moreData(),
        code: 200,
        message: '数据获取成功'
      };
    }
  }
];
