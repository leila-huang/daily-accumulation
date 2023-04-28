
export const originMenu = [
    {
        "ModelID": 0,
        "name": "Terminal",
        "label": "终端",
        "order": 0
    },
    {
        "ModelID": 0,
        "parent": "Terminal",
        "name": "MachineManage",
        "label": "游乐项目",
        "order": 0
    },
    {
        "ModelID": 100000900,
        "parent": "MachineManage",
        "name": "MachineTypeSet-hmtl",
        "label": "项目分类",
        "order": 1,
        "type": "html",
        "resource": "game/machinetypeset.html"
    },
    {
        "ModelID": 101000100,
        "parent": "MachineManage",
        "name": "MachineSet-hmtl",
        "label": "游乐项目管理",
        "order": 2,
        "type": "html",
        "resource": "game/machineset.html"
    },
    {
        "ModelID": 101005000,
        "parent": "MachineManage",
        "name": "MachinePortSet-hmtl",
        "label": "项目端口管理",
        "order": 3,
        "type": "html",
        "resource": "game/machineportset.html"
    },
    {
        "ModelID": 101006000,
        "parent": "MachineManage",
        "name": "JellyScreenAD-hmtl",
        "label": "卡头图库管理",
        "order": 4,
        "type": "html",
        "resource": "game/jellyscreenad.html"
    },
    {
        "ModelID": 0,
        "parent": "Terminal",
        "name": "YCHMachine",
        "label": "油菜花硬件",
        "order": 5
    },
    {
        "ModelID": 100000700,
        "parent": "YCHMachine",
        "name": "TerminalSet-hmtl",
        "label": "收银终端",
        "order": 6,
        "type": "html",
        "resource": "terminal/terminalset.html"
    },
    {
        "ModelID": 101019200,
        "parent": "YCHMachine",
        "name": "PhysicalCoinTerminalSet-hmtl",
        "label": "实物币终端",
        "order": 7,
        "type": "html",
        "resource": "physicalcoin/physicalcointerminalset.html"
    },
    {
        "ModelID": 1020093000,
        "parent": "YCHMachine",
        "name": "IntelligentTerminal-hmtl",
        "label": "智能硬件",
        "order": 8,
        "type": "html",
        "resource": "game/intelligentterminal.html"
    },
    {
        "ModelID": 101011000,
        "parent": "YCHMachine",
        "name": "GameTerminal-hmtl",
        "label": "查询机/售卡机",
        "order": 9,
        "type": "html",
        "resource": "game/gameterminal.html"
    },
    {
        "ModelID": 101039800,
        "parent": "YCHMachine",
        "name": "ADMac-hmtl",
        "label": "广告机",
        "order": 10,
        "type": "html",
        "resource": "queue/admac.html"
    },
    {
        "ModelID": 1020091800,
        "parent": "YCHMachine",
        "name": "PsgFlowDeviceManager-hmtl",
        "label": "客流设备管理",
        "order": 11,
        "type": "html",
        "resource": "passengerflow/psgflowdevicemanager.html"
    },
    {
        "ModelID": 100004400,
        "parent": "YCHMachine",
        "name": "TerminalShowSet-hmtl",
        "label": "展示终端",
        "order": 12,
        "type": "html",
        "resource": "terminal/terminalshowset.html"
    },
    {
        "ModelID": 0,
        "parent": "Terminal",
        "name": "BaseSet",
        "label": "基础设置",
        "order": 13
    },
    {
        "ModelID": 1030101800,
        "parent": "BaseSet",
        "name": "MachineSetControl-hmtl",
        "label": "卡头wifi通讯设置",
        "order": 14,
        "type": "html",
        "resource": "game/machinesetcontrol.html"
    },
    {
        "ModelID": 101040500,
        "parent": "BaseSet",
        "name": "MachineBaseSet-hmtl",
        "label": "端口通讯设置",
        "order": 15,
        "type": "html",
        "resource": "game/machinebaseset.html"
    },
    {
        "ModelID": 101041900,
        "parent": "BaseSet",
        "name": "BilliardsRegretMinutes-hmtl",
        "label": "体育基础设置",
        "order": 16,
        "type": "html",
        "resource": "game/billiardsregretminutes.html"
    },
    {
        "ModelID": 101042200,
        "parent": "BaseSet",
        "name": "BiologyRecognitionSet-hmtl",
        "label": "生物识别设置",
        "order": 17,
        "type": "html",
        "resource": "game/biologyrecognitionset.html"
    },
    {
        "ModelID": 101041200,
        "parent": "BaseSet",
        "name": "AreaSetting-hmtl",
        "label": "区域设置",
        "order": 18,
        "type": "html",
        "resource": "game/areasetting.html"
    },
    {
        "ModelID": 101042300,
        "parent": "BaseSet",
        "name": "MachineRunCountList-hmtl",
        "label": "刷卡桩人流管理",
        "order": 19,
        "type": "html",
        "resource": "game/machineruncountlist.html"
    },
    {
        "ModelID": 101042400,
        "parent": "BaseSet",
        "name": "AdmissionNoticeSet-hmtl",
        "label": "入园需知设置",
        "order": 20,
        "type": "html",
        "resource": "game/admissionnoticeset.html"
    },
    {
        "ModelID": 101045400,
        "parent": "BaseSet",
        "name": "KartRaceSeting-hmtl",
        "label": "卡丁车设置",
        "order": 21,
        "type": "html",
        "resource": "game/kartraceseting.html"
    },
    {
        "ModelID": 0,
        "parent": "Terminal",
        "name": "MachineMaintain",
        "label": "设备维护",
        "order": 22
    },
    {
        "ModelID": 101039600,
        "parent": "MachineMaintain",
        "name": "BusinessRepairLog-hmtl",
        "label": "机修卡刷卡记录",
        "order": 23,
        "type": "html",
        "resource": "game/businessrepairlog.html"
    },
    {
        "ModelID": 101018300,
        "parent": "MachineMaintain",
        "name": "MayMachineStopCenter-hmtl",
        "label": "疑似停机报表",
        "order": 24,
        "type": "html",
        "resource": "game/maymachinestopcenter.html"
    },
    {
        "ModelID": 1010089600,
        "parent": "MachineMaintain",
        "name": "RepairLogQuery.htm",
        "label": "维修记录",
        "order": 25,
        "type": "html",
        "resource": "game/repairlogquery.htm"
    },
    {
        "ModelID": 0,
        "parent": "Terminal",
        "name": "MachineDebug",
        "label": "设备调试",
        "order": 26
    },
    {
        "ModelID": 101001200,
        "parent": "MachineDebug",
        "name": "MonitorOnline-hmtl",
        "label": "项目监控",
        "order": 27,
        "type": "html",
        "resource": "game/monitoronline.html"
    },
    {
        "ModelID": 101001300,
        "parent": "MachineDebug",
        "name": "MonitorDebug-hmtl",
        "label": "终端调试",
        "order": 28,
        "type": "html",
        "resource": "game/monitordebug.html"
    },
    {
        "ModelID": 101001400,
        "parent": "MachineDebug",
        "name": "MonitorLog-hmtl",
        "label": "运行日志",
        "order": 29,
        "type": "html",
        "resource": "game/monitorlog.html"
    },
    {
        "ModelID": 1010090100,
        "parent": "MachineDebug",
        "name": "MachineAlarmLogQuery-hmtl",
        "label": "项目异常记录",
        "order": 30,
        "type": "html",
        "resource": "game/machinealarmlogquery.html"
    },
    {
        "ModelID": 1010090400,
        "parent": "MachineDebug",
        "name": "TerminalReport-hmtl",
        "label": "终端设备看板",
        "order": 31,
        "type": "html",
        "resource": "game/terminalreport.html"
    },
    {
        "ModelID": 0,
        "name": "Leaguer",
        "label": "会员",
        "order": 1
    },
    {
        "ModelID": 101054600,
        "parent": "Leaguer",
        "name": "LgBalanceQueryDataCenter-hmtl",
        "label": "会员管理",
        "order": 32,
        "type": "html",
        "resource": "leaguer/lgbalancequerydatacenter.html"
    },
    {
        "ModelID": 100001100,
        "parent": "Leaguer",
        "name": "LgLeveSet-hmtl",
        "label": "会员级别",
        "order": 33,
        "type": "html",
        "resource": "leaguer/lgleveset.html"
    },
    {
        "ModelID": 100012300,
        "parent": "Leaguer",
        "name": "LeaguerRFMMark-hmtl",
        "label": "会员RFM",
        "order": 34,
        "type": "html",
        "resource": "leaguer/leaguerrfmmark.html"
    },
    {
        "ModelID": 100012400,
        "parent": "Leaguer",
        "name": "LeaguerMark-hmtl",
        "label": "会员标签",
        "order": 35,
        "type": "html",
        "resource": "leaguer/leaguermark.html"
    },
    {
        "ModelID": 100012500,
        "parent": "Leaguer",
        "name": "LeaguerGroup-hmtl",
        "label": "会员分群",
        "order": 36,
        "type": "html",
        "resource": "leaguer/leaguergroup.html"
    },
    {
        "ModelID": 101002100,
        "parent": "Leaguer",
        "name": "TokenTakeCoinLog-hmtl",
        "label": "口令补币",
        "order": 37,
        "type": "html",
        "resource": "game/tokentakecoinlog.html"
    },
    {
        "ModelID": 100010300,
        "parent": "Leaguer",
        "name": "SendMessages-hmtl",
        "label": "发送短信",
        "order": 38,
        "type": "html",
        "resource": "leaguer/sendmessages.html"
    },
    {
        "ModelID": 1030101300,
        "parent": "Leaguer",
        "name": "LgUpgradeSet-hmtl",
        "label": "会员升级策略",
        "order": 39,
        "type": "html",
        "resource": "growth/lgupgradeset.html"
    },
    {
        "ModelID": 101020000,
        "parent": "Leaguer",
        "name": "HeapcentSchemeSetNew-hmtl",
        "label": "积分赠送策略",
        "order": 40,
        "type": "html",
        "resource": "leaguer/heapcentschemesetnew.html"
    },
    {
        "ModelID": 0,
        "parent": "Leaguer",
        "name": "MissionSystem",
        "label": "任务系统",
        "order": 41
    },
    {
        "ModelID": 1040100100,
        "parent": "MissionSystem",
        "name": "MissionManagement-hmtl",
        "label": "会员任务",
        "order": 42,
        "type": "html",
        "resource": "game/missionmanagement.html"
    },
    {
        "ModelID": 101046500,
        "parent": "MissionSystem",
        "name": "ExtensionFunction-hmtl?func=Achievement",
        "label": "会员成就设置",
        "order": 43,
        "type": "html",
        "resource": "ykb/extensionfunction.html?func=achievement"
    },
    {
        "ModelID": 101046600,
        "parent": "MissionSystem",
        "name": "YZYManage-hmtl?func=Achievement",
        "label": "运动打卡设置",
        "order": 44,
        "type": "html",
        "resource": "ykb/yzymanage.html?func=achievement"
    },
    {
        "ModelID": 0,
        "parent": "Leaguer",
        "name": "LeaguerAnalyse",
        "label": "会员分析",
        "order": 45
    },
    {
        "ModelID": 101010300,
        "parent": "LeaguerAnalyse",
        "name": "LeaguerAnalysisReport-hmtl",
        "label": "会员活跃分析表",
        "order": 46,
        "type": "html",
        "resource": "leaguer/leagueranalysisreport.html"
    },
    {
        "ModelID": 101011300,
        "parent": "LeaguerAnalyse",
        "name": "LeaguerBuyAnalysisReport-hmtl",
        "label": "会员复购分析表",
        "order": 47,
        "type": "html",
        "resource": "leaguer/leaguerbuyanalysisreport.html"
    },
    {
        "ModelID": 101008800,
        "parent": "LeaguerAnalyse",
        "name": "LgLvValueLogbusinRPT-hmtl",
        "label": "会员级别消费梯度",
        "order": 48,
        "type": "html",
        "resource": "game/lglvvaluelogbusinrpt.html"
    },
    {
        "ModelID": 100001900,
        "parent": "LeaguerAnalyse",
        "name": "LgConsumeSoft-hmtl",
        "label": "会员消费排行",
        "order": 49,
        "type": "html",
        "resource": "leaguer/lgconsumesoft.html"
    },
    {
        "ModelID": 101005800,
        "parent": "LeaguerAnalyse",
        "name": "MachineLgValueChangeforBiz-hmtl",
        "label": "会员级别消费占比",
        "order": 50,
        "type": "html",
        "resource": "game/machinelgvaluechangeforbiz.html"
    },
    {
        "ModelID": 101010400,
        "parent": "LeaguerAnalyse",
        "name": "LgMachineInCoinActiveRPT-hmtl",
        "label": "会员活跃区间",
        "order": 51,
        "type": "html",
        "resource": "game/lgmachineincoinactiverpt.html"
    },
    {
        "ModelID": 1010093900,
        "parent": "LeaguerAnalyse",
        "name": "LgValueLogUse-hmtl",
        "label": "会员储值变更分析",
        "order": 52,
        "type": "html",
        "resource": "leaguer/lgvalueloguse.html"
    },
    {
        "ModelID": 1030102700,
        "parent": "LeaguerAnalyse",
        "name": "LeaguerIntegratedData-hmtl",
        "label": "会员数据简报",
        "order": 53,
        "type": "html",
        "resource": "game/leaguerintegrateddata.html"
    },
    {
        "ModelID": 0,
        "parent": "Leaguer",
        "name": "ExpireSupCoin",
        "label": "会员币批次",
        "order": 54
    },
    {
        "ModelID": 101045800,
        "parent": "ExpireSupCoin",
        "name": "AdjustTokenPeriodValidity-hmtl",
        "label": "调整币有效期",
        "order": 55,
        "type": "html",
        "resource": "leaguer/adjusttokenperiodvalidity.html"
    },
    {
        "ModelID": 101045900,
        "parent": "ExpireSupCoin",
        "name": "AdjustTokenPeriodValidityQuery-hmtl",
        "label": "调整币有效期查询",
        "order": 56,
        "type": "html",
        "resource": "leaguer/adjusttokenperiodvalidityquery.html"
    },
    {
        "ModelID": 101046000,
        "parent": "ExpireSupCoin",
        "name": "ExpireSupCoin-hmtl",
        "label": "过期补币",
        "order": 57,
        "type": "html",
        "resource": "game/expiresupcoin.html"
    },
    {
        "ModelID": 1010089700,
        "parent": "ExpireSupCoin",
        "name": "ExpireMakeCoinLog-hmtl",
        "label": "过期补币记录",
        "order": 58,
        "type": "html",
        "resource": "game/expiremakecoinlog.html"
    },
    {
        "ModelID": 1010089800,
        "parent": "ExpireSupCoin",
        "name": "LgCoinExpireList-hmtl",
        "label": "过期币查询",
        "order": 59,
        "type": "html",
        "resource": "leaguer/lgcoinexpirelist.html"
    },
    {
        "ModelID": 100016200,
        "parent": "Leaguer",
        "name": "LeaguerVTimeBatchChangeLog-hmtl",
        "label": "会员批量延期",
        "order": 60,
        "type": "html",
        "resource": "leaguer/leaguervtimebatchchangelog.html"
    },
    {
        "ModelID": 101015100,
        "parent": "Leaguer",
        "name": "LgDataImport-hmtl",
        "label": "会员资料导入",
        "order": 61,
        "type": "html",
        "resource": "leaguer/lgdataimport.html"
    },
    {
        "ModelID": 0,
        "name": "Goods",
        "label": "商品",
        "order": 2
    },
    {
        "ModelID": 101002900,
        "parent": "Goods",
        "name": "CoinMealSets-hmtl",
        "label": "游戏币套餐",
        "order": 62,
        "type": "html",
        "resource": "game/coinmealsets.html"
    },
    {
        "ModelID": 100001300,
        "parent": "Goods",
        "name": "LgChangeSet-hmtl",
        "label": "预存款套餐",
        "order": 63,
        "type": "html",
        "resource": "leaguer/lgchangeset.html"
    },
    {
        "ModelID": 1030092200,
        "parent": "Goods",
        "name": "PackageTicketMealSet-hmtl",
        "label": "游乐套票",
        "order": 64,
        "type": "html",
        "resource": "game/packageticketmealset.html"
    },
    {
        "ModelID": 100003800,
        "parent": "Goods",
        "name": "/goods-management",
        "label": "零售商品",
        "order": 65,
        "type": "new",
        "resource": "goods/goods-management"
    },
    {
        "ModelID": 100005500,
        "parent": "Goods",
        "name": "GoodsCombinationList-hmtl",
        "label": "组合商品",
        "order": 66,
        "type": "html",
        "resource": "goods/goodscombinationlist.html"
    },
    {
        "ModelID": 100001200,
        "parent": "Goods",
        "name": "LgJoinChangeSet-hmtl",
        "label": "入会套餐",
        "order": 67,
        "type": "html",
        "resource": "leaguer/lgjoinchangeset.html"
    },
    {
        "ModelID": 101045500,
        "parent": "Goods",
        "name": "PackageTicketGroup-hmtl",
        "label": "团体票",
        "order": 68,
        "type": "html",
        "resource": "game/packageticketgroup.html"
    },
    {
        "ModelID": 100005600,
        "parent": "Goods",
        "name": "GoodPriceList-hmtl",
        "label": "商品定价",
        "order": 69,
        "type": "html",
        "resource": "goods/goodpricelist.html"
    },
    {
        "ModelID": 100005900,
        "parent": "Goods",
        "name": "GoodPriceHistory-hmtl",
        "label": "定价历史查询",
        "order": 70,
        "type": "html",
        "resource": "goods/goodpricehistory.html"
    },
    {
        "ModelID": 101009900,
        "parent": "Goods",
        "name": "GoodsExchange-hmtl",
        "label": "商品兑换设置",
        "order": 71,
        "type": "html",
        "resource": "goods/goodsexchange.html"
    },
    {
        "ModelID": 0,
        "parent": "Goods",
        "name": "Lease",
        "label": "租赁",
        "order": 72
    },
    {
        "ModelID": 101040100,
        "parent": "Lease",
        "name": "LeaseGoods-hmtl",
        "label": "租赁商品管理",
        "order": 73,
        "type": "html",
        "resource": "lease/leasegoods.html"
    },
    {
        "ModelID": 101040400,
        "parent": "Lease",
        "name": "LeaseOrder-hmtl",
        "label": "租赁支付单",
        "order": 74,
        "type": "html",
        "resource": "lease/leaseorder.html"
    },
    {
        "ModelID": 101040200,
        "parent": "Lease",
        "name": "LeaseOrderQuery-hmtl",
        "label": "租赁订单查询",
        "order": 75,
        "type": "html",
        "resource": "lease/leaseorderquery.html"
    },
    {
        "ModelID": 101040300,
        "parent": "Lease",
        "name": "LeaseStock-hmtl",
        "label": "租赁仓库",
        "order": 76,
        "type": "html",
        "resource": "lease/leasestock.html"
    },
    {
        "ModelID": 0,
        "parent": "Goods",
        "name": "ShoppingGuide",
        "label": "导购",
        "order": 77
    },
    {
        "ModelID": 1010094000,
        "parent": "ShoppingGuide",
        "name": "ShoppingGuideList-hmtl",
        "label": "导购员列表",
        "order": 78,
        "type": "html",
        "resource": "shoppingguide/shoppingguidelist.html"
    },
    {
        "ModelID": 1010094100,
        "parent": "ShoppingGuide",
        "name": "ShoppingGuideGoodsList-hmtl",
        "label": "导购商品管理",
        "order": 79,
        "type": "html",
        "resource": "shoppingguide/shoppingguidegoodslist.html"
    },
    {
        "ModelID": 1010094200,
        "parent": "ShoppingGuide",
        "name": "ShoppingGuideGoodsLog-hmtl",
        "label": "导购修改记录",
        "order": 80,
        "type": "html",
        "resource": "shoppingguide/shoppingguidegoodslog.html"
    },
    {
        "ModelID": 1010094300,
        "parent": "ShoppingGuide",
        "name": "ShoppingGuideSaleDetail-hmtl",
        "label": "导购销售明细",
        "order": 81,
        "type": "html",
        "resource": "shoppingguide/shoppingguidesaledetail.html"
    },
    {
        "ModelID": 1010094400,
        "parent": "ShoppingGuide",
        "name": "ShoppingGuideSaleTotal-hmtl",
        "label": "导购销售汇总",
        "order": 82,
        "type": "html",
        "resource": "shoppingguide/shoppingguidesaletotal.html"
    },
    {
        "ModelID": 1010094500,
        "parent": "ShoppingGuide",
        "name": "ShoppingGuiderPerformanceTotal-hmtl",
        "label": "导购员业绩汇总",
        "order": 83,
        "type": "html",
        "resource": "shoppingguide/shoppingguiderperformancetotal.html"
    },
    {
        "ModelID": 1010095600,
        "parent": "ShoppingGuide",
        "name": "ShoppingGuideSetting-hmtl",
        "label": "导购设置",
        "order": 84,
        "type": "html",
        "resource": "shoppingguide/shoppingguidesetting.html"
    },
    {
        "ModelID": 0,
        "parent": "Goods",
        "name": "MealSet",
        "label": "餐厅",
        "order": 85
    },
    {
        "ModelID": 1020091200,
        "parent": "MealSet",
        "name": "MealTableSet-hmtl",
        "label": "桌台管理",
        "order": 86,
        "type": "html",
        "resource": "meal/mealtableset.html"
    },
    {
        "ModelID": 1020091300,
        "parent": "MealSet",
        "name": "AutoPrintSet-hmtl",
        "label": "自动接单设置",
        "order": 87,
        "type": "html",
        "resource": "meal/autoprintset.html"
    },
    {
        "ModelID": 0,
        "parent": "Goods",
        "name": "SpecialActivitySet",
        "label": "专项项目",
        "order": 88
    },
    {
        "ModelID": 1030094300,
        "parent": "SpecialActivitySet",
        "name": "SpecialActivityType-hmtl",
        "label": "专项项目管理",
        "order": 89,
        "type": "html",
        "resource": "specialactivity/specialactivitytype.html"
    },
    {
        "ModelID": 1030094400,
        "parent": "SpecialActivitySet",
        "name": "SpecialActivityQuery-hmtl",
        "label": "专项订单查询",
        "order": 90,
        "type": "html",
        "resource": "specialactivity/specialactivityquery.html"
    },
    {
        "ModelID": 1030094500,
        "parent": "SpecialActivitySet",
        "name": "SpecialActivityConsumeDetail-hmtl",
        "label": "专项消费明细",
        "order": 91,
        "type": "html",
        "resource": "specialactivity/specialactivityconsumedetail.html"
    },
    {
        "ModelID": 0,
        "parent": "Goods",
        "name": "ETMSet",
        "label": "早教管理",
        "order": 92
    },
    {
        "ModelID": 1030094900,
        "parent": "ETMSet",
        "name": "EtmManager-hmtl",
        "label": "业务管理",
        "order": 93,
        "type": "html",
        "resource": "etm/etmmanager.html"
    },
    {
        "ModelID": 1030095000,
        "parent": "ETMSet",
        "name": "ETMUserInfo-hmtl",
        "label": "早教用户设置",
        "order": 94,
        "type": "html",
        "resource": "etm/etmuserinfo.html"
    },
    {
        "ModelID": 1030095100,
        "parent": "ETMSet",
        "name": "ETMContractInfo-hmtl",
        "label": "合同套餐管理",
        "order": 95,
        "type": "html",
        "resource": "etm/etmcontractinfo.html"
    },
    {
        "ModelID": 1030095200,
        "parent": "ETMSet",
        "name": "ETMContractSynchronizeLog-hmtl",
        "label": "合同同步记录",
        "order": 96,
        "type": "html",
        "resource": "etm/etmcontractsynchronizelog.html"
    },
    {
        "ModelID": 0,
        "parent": "Goods",
        "name": "GoodsShow",
        "label": "商品展示",
        "order": 97
    },
    {
        "ModelID": 1030100900,
        "parent": "GoodsShow",
        "name": "TerminalSetControl-hmtl",
        "label": "终端售卖设置",
        "order": 98,
        "type": "html",
        "resource": "terminal/terminalsetcontrol.html"
    },
    {
        "ModelID": 100012000,
        "parent": "GoodsShow",
        "name": "GoodGroupHome-hmtl",
        "label": "展示商品分组",
        "order": 99,
        "type": "html",
        "resource": "goods/goodgrouphome.html"
    },
    {
        "ModelID": 0,
        "name": "Market",
        "label": "营销",
        "order": 3
    },
    {
        "ModelID": 101021100,
        "parent": "Market",
        "name": "PromotionCoupon-hmtl",
        "label": "优惠券",
        "order": 100,
        "type": "html",
        "resource": "promotion/promotioncoupon.html"
    },
    {
        "ModelID": 101021200,
        "parent": "Market",
        "name": "PromotionCouponQuery-hmtl",
        "label": "优惠券查询",
        "order": 101,
        "type": "html",
        "resource": "promotion/promotioncouponquery.html"
    },
    {
        "ModelID": 100006200,
        "parent": "Market",
        "name": "PromotionLeaguerDiscount-hmtl",
        "label": "会员折扣",
        "order": 102,
        "type": "html",
        "resource": "promotion/promotionleaguerdiscount.html"
    },
    {
        "ModelID": 100006300,
        "parent": "Market",
        "name": "TimeLimitSpecialOffer-hmtl",
        "label": "会员特价",
        "order": 103,
        "type": "html",
        "resource": "promotion/timelimitspecialoffer.html"
    },
    {
        "ModelID": 101017000,
        "parent": "Market",
        "name": "PromotionFullCut-hmtl",
        "label": "满减活动",
        "order": 104,
        "type": "html",
        "resource": "promotion/promotionfullcut.html"
    },
    {
        "ModelID": 100006100,
        "parent": "Market",
        "name": "PromotionScheme-hmtl",
        "label": "促销优先级",
        "order": 105,
        "type": "html",
        "resource": "promotion/promotionscheme.html"
    },
    {
        "ModelID": 101005500,
        "parent": "Market",
        "name": "PromotionUsedLog-hmtl",
        "label": "促销使用记录",
        "order": 106,
        "type": "html",
        "resource": "promotion/promotionusedlog.html"
    },
    {
        "ModelID": 101005601,
        "parent": "Market",
        "name": "MarketingProgramReport-hmtl",
        "label": "商品促销统计",
        "order": 107,
        "type": "html",
        "resource": "promotion/marketingprogramreport.html"
    },
    {
        "ModelID": 101010000,
        "parent": "Market",
        "name": "ExchangeLgLvPriceRate-hmtl",
        "label": "会员兑换比例",
        "order": 108,
        "type": "html",
        "resource": "goods/exchangelglvpricerate.html"
    },
    {
        "ModelID": 101003300,
        "parent": "Market",
        "name": "MachineDiscount-hmtl",
        "label": "项目时段优惠",
        "order": 109,
        "type": "html",
        "resource": "game/machinediscount.html"
    },
    {
        "ModelID": 101100400,
        "parent": "Market",
        "name": "PromotionTopUpReturn-hmtl",
        "label": "充值赠送",
        "order": 110,
        "type": "html",
        "resource": "promotion/promotiontopupreturn.html"
    },
    {
        "ModelID": 101100500,
        "parent": "Market",
        "name": "PromotionGiveGift-hmtl",
        "label": "满赠礼品M选N",
        "order": 111,
        "type": "html",
        "resource": "promotion/promotiongivegift.html"
    },
    {
        "ModelID": 101000200,
        "parent": "Market",
        "name": "GivingCoinSet-hmtl",
        "label": "活动赠送",
        "order": 112,
        "type": "html",
        "resource": "game/givingcoinset.html"
    },
    {
        "ModelID": 1020093300,
        "parent": "Market",
        "name": "SaveLotteryActivitySet-hmtl",
        "label": "彩票排行榜",
        "order": 113,
        "type": "html",
        "resource": "game/savelotteryactivityset.html"
    },
    {
        "ModelID": 101011700,
        "parent": "Market",
        "name": "LotteryControl-hmtl",
        "label": "存票抽奖设置",
        "order": 114,
        "type": "html",
        "resource": "game/lotterycontrol.html"
    },
    {
        "ModelID": 0,
        "parent": "Market",
        "name": "Voucher",
        "label": "代金券",
        "order": 115
    },
    {
        "ModelID": 100008800,
        "parent": "Voucher",
        "name": "VoucherScheme-hmtl",
        "label": "代金券设置",
        "order": 116,
        "type": "html",
        "resource": "voucher/voucherscheme.html"
    },
    {
        "ModelID": 100008900,
        "parent": "Voucher",
        "name": "VoucherLog-hmtl",
        "label": "代金券生成",
        "order": 117,
        "type": "html",
        "resource": "voucher/voucherlog.html"
    },
    {
        "ModelID": 100009000,
        "parent": "Voucher",
        "name": "VoucherLogUsed-hmtl",
        "label": "代金券使用记录",
        "order": 118,
        "type": "html",
        "resource": "voucher/voucherlogused.html"
    },
    {
        "ModelID": 0,
        "name": "Jointly",
        "label": "联营",
        "order": 4
    },
    {
        "ModelID": 0,
        "parent": "Jointly",
        "name": "PartnersSet",
        "label": "往来单位",
        "order": 119
    },
    {
        "ModelID": 100003900,
        "parent": "PartnersSet",
        "name": "PartnersSet-hmtl",
        "label": "往来单位管理",
        "order": 120,
        "type": "html",
        "resource": "finance/partnersset.html"
    },
    {
        "ModelID": 100004800,
        "parent": "PartnersSet",
        "name": "PartnerAccountChangeLog-hmtl",
        "label": "往来单位收付款",
        "order": 121,
        "type": "html",
        "resource": "finance/partneraccountchangelog.html"
    },
    {
        "ModelID": 100004000,
        "parent": "PartnersSet",
        "name": "PartnerAccountSearch-hmtl",
        "label": "往来单位账户余额",
        "order": 122,
        "type": "html",
        "resource": "finance/partneraccountsearch.html"
    },
    {
        "ModelID": 100004100,
        "parent": "PartnersSet",
        "name": "PartnerAccountLogSet-hmtl",
        "label": "往来单位账户变更",
        "order": 123,
        "type": "html",
        "resource": "finance/partneraccountlogset.html"
    },
    {
        "ModelID": 0,
        "parent": "Jointly",
        "name": "Supplier",
        "label": "供应商",
        "order": 124
    },
    {
        "ModelID": 100009800,
        "parent": "Supplier",
        "name": "PurchaseCutSchemeWanDa-hmtl",
        "label": "代销提成设置",
        "order": 125,
        "type": "html",
        "resource": "finance/purchasecutschemewanda.html"
    },
    {
        "ModelID": 100009900,
        "parent": "Supplier",
        "name": "PurchaseCutSave-hmtl",
        "label": "代销提成结算",
        "order": 126,
        "type": "html",
        "resource": "finance/purchasecutsave.html"
    },
    {
        "ModelID": 101005300,
        "parent": "Supplier",
        "name": "CommissionedSellRpt-hmtl",
        "label": "联营代销报表",
        "order": 127,
        "type": "html",
        "resource": "finance/commissionedsellrpt.html"
    },
    {
        "ModelID": 1030092100,
        "parent": "Jointly",
        "name": "CustomerSet-hmtl",
        "label": "客户设置",
        "order": 128,
        "type": "html",
        "resource": "inventory/customerset.html"
    },
    {
        "ModelID": 0,
        "parent": "Jointly",
        "name": "MachineJointly",
        "label": "项目联营",
        "order": 129
    },
    {
        "ModelID": 101037400,
        "parent": "MachineJointly",
        "name": "JointlyProviderManagement-hmtl",
        "label": "联营服务商设置",
        "order": 130,
        "type": "html",
        "resource": "game/jointlyprovidermanagement.html"
    },
    {
        "ModelID": 101037500,
        "parent": "MachineJointly",
        "name": "JoinlyProviderMoneyQuery-hmtl",
        "label": "项目分成查询",
        "order": 131,
        "type": "html",
        "resource": "game/joinlyprovidermoneyquery.html"
    },
    {
        "ModelID": 0,
        "parent": "Jointly",
        "name": "ParticipatingShare",
        "label": "加盟分成",
        "order": 132
    },
    {
        "ModelID": 101046800,
        "parent": "ParticipatingShare",
        "name": "GoodsGroupDivisionSet-hmtl",
        "label": "分类分成设置",
        "order": 133,
        "type": "html",
        "resource": "game/goodsgroupdivisionset.html"
    },
    {
        "ModelID": 101046700,
        "parent": "ParticipatingShare",
        "name": "GoodsDivisionSet-hmtl",
        "label": "商品分成设置",
        "order": 134,
        "type": "html",
        "resource": "game/goodsdivisionset.html"
    },
    {
        "ModelID": 101046900,
        "parent": "ParticipatingShare",
        "name": "GoodsDivisionDetailsQuery-hmtl",
        "label": "商品分成明细查询",
        "order": 135,
        "type": "html",
        "resource": "game/goodsdivisiondetailsquery.html"
    },
    {
        "ModelID": 101047100,
        "parent": "ParticipatingShare",
        "name": "SettlementSheetQuery-hmtl",
        "label": "结算单查询",
        "order": 136,
        "type": "html",
        "resource": "game/settlementsheetquery.html"
    },
    {
        "ModelID": 0,
        "parent": "Jointly",
        "name": "StoredValuePayment",
        "label": "储值支付平台",
        "order": 137
    },
    {
        "ModelID": 1010092500,
        "parent": "StoredValuePayment",
        "name": "StoredValuePaymentOn-hmtl",
        "label": "平台对接开关",
        "order": 138,
        "type": "html",
        "resource": "storedvaluepayment/storedvaluepaymenton.html"
    },
    {
        "ModelID": 1010092600,
        "parent": "StoredValuePayment",
        "name": "StoredValuePaymentList-hmtl",
        "label": "平台对接配置",
        "order": 139,
        "type": "html",
        "resource": "storedvaluepayment/storedvaluepaymentlist.html"
    },
    {
        "ModelID": 1010092700,
        "parent": "StoredValuePayment",
        "name": "SVPReport-hmtl",
        "label": "储值支付报表",
        "order": 140,
        "type": "html",
        "resource": "storedvaluepayment/svpreport.html"
    },
    {
        "ModelID": 0,
        "name": "OnLine",
        "label": "线上",
        "order": 5
    },
    {
        "ModelID": 0,
        "parent": "OnLine",
        "name": "OnLineChannelSet",
        "label": "线上渠道",
        "order": 141
    },
    {
        "ModelID": 1010093400,
        "parent": "OnLineChannelSet",
        "name": "Channel-hmtl",
        "label": "线上渠道管理",
        "order": 142,
        "type": "html",
        "resource": "goods/channel.html"
    },
    {
        "ModelID": 1010093500,
        "parent": "OnLineChannelSet",
        "name": "channelPricing-hmtl",
        "label": "线上商品管理",
        "order": 143,
        "type": "html",
        "resource": "goods/channelpricing.html"
    },
    {
        "ModelID": 1020091700,
        "parent": "OnLineChannelSet",
        "name": "OTAComPriceSet-hmtl",
        "label": "结算价规则设置",
        "order": 144,
        "type": "html",
        "resource": "packageticketota/otacompriceset.html"
    },
    {
        "ModelID": 0,
        "parent": "OnLine",
        "name": "MeiTuan",
        "label": "美团",
        "order": 145
    },
    {
        "ModelID": 1020089500,
        "parent": "MeiTuan",
        "name": "DaZhongGoodsBinding-hmtl",
        "label": "美团商品绑定",
        "order": 146,
        "type": "html",
        "resource": "online/dazhonggoodsbinding.html"
    },
    {
        "ModelID": 0,
        "parent": "OnLine",
        "name": "AoFei",
        "label": "奥飞俱乐部",
        "order": 147
    },
    {
        "ModelID": 1030101700,
        "parent": "AoFei",
        "name": "AoFeiClubGoodsBinding-hmtl",
        "label": "奥飞俱乐部商品绑定",
        "order": 148,
        "type": "html",
        "resource": "online/aofeiclubgoodsbinding.html"
    },
    {
        "ModelID": 0,
        "parent": "OnLine",
        "name": "Koubei",
        "label": "口碑",
        "order": 149
    },
    {
        "ModelID": 1010089300,
        "parent": "Koubei",
        "name": "bindKoubeiShop-hmtl",
        "label": "口碑门店绑定",
        "order": 150,
        "type": "html",
        "resource": "online/bindkoubeishop.html"
    },
    {
        "ModelID": 1010089400,
        "parent": "Koubei",
        "name": "PublicPraiseGoodsBind-hmtl",
        "label": "口碑商品绑定",
        "order": 151,
        "type": "html",
        "resource": "online/publicpraisegoodsbind.html"
    },
    {
        "ModelID": 1010089500,
        "parent": "Koubei",
        "name": "kouBeiOrderQuery-hmtl",
        "label": "口碑订单查询",
        "order": 152,
        "type": "html",
        "resource": "online/koubeiorderquery.html"
    },
    {
        "ModelID": 0,
        "parent": "OnLine",
        "name": "Ota",
        "label": "OTA",
        "order": 153
    },
    {
        "ModelID": 1010093200,
        "parent": "Ota",
        "name": "PackageTicketOTA-hmtl",
        "label": "OTA门票管理",
        "order": 154,
        "type": "html",
        "resource": "packageticketota/packageticketota.html"
    },
    {
        "ModelID": 1010093300,
        "parent": "Ota",
        "name": "OTAOrderItem-hmtl",
        "label": "OTA订单查询",
        "order": 155,
        "type": "html",
        "resource": "packageticketota/otaorderitem.html"
    },
    {
        "ModelID": 0,
        "parent": "OnLine",
        "name": "TikTok",
        "label": "抖音团购",
        "order": 156
    },
    {
        "ModelID": 1020093500,
        "parent": "TikTok",
        "name": "TikTokGroupBuyGoodsBinding-hmtl",
        "label": "抖音商品绑定",
        "order": 157,
        "type": "html",
        "resource": "online/tiktokgroupbuygoodsbinding.html"
    },
    {
        "ModelID": 0,
        "parent": "OnLine",
        "name": "TeamBooking",
        "label": "团队预约",
        "order": 158
    },
    {
        "ModelID": 1030101000,
        "parent": "TeamBooking",
        "name": "TeamBooking-hmtl",
        "label": "预约设置",
        "order": 159,
        "type": "html",
        "resource": "teambooking/teambooking.html"
    },
    {
        "ModelID": 1030101100,
        "parent": "TeamBooking",
        "name": "TeamBookingLogQuery-hmtl",
        "label": "预约记录",
        "order": 160,
        "type": "html",
        "resource": "teambooking/teambookinglogquery.html"
    },
    {
        "ModelID": 0,
        "name": "WeiXinApp",
        "label": "小程序",
        "order": 6
    },
    {
        "ModelID": 1020092000,
        "parent": "WeiXinApp",
        "name": "YkbManager-hmtl",
        "label": "小程序授权",
        "order": 161,
        "type": "html",
        "resource": "ykb/ykbmanager.html"
    },
    {
        "ModelID": 1020092100,
        "parent": "WeiXinApp",
        "name": "YKBHome-hmtl",
        "label": "小程序装修",
        "order": 162,
        "type": "html",
        "resource": "ykb/ykbhome.html"
    },
    {
        "ModelID": 1020092500,
        "parent": "WeiXinApp",
        "name": "GoodsInfo-hmtl",
        "label": "小程序商品",
        "order": 163,
        "type": "html",
        "resource": "ykb/goodsinfo.html"
    },
    {
        "ModelID": 1020092600,
        "parent": "WeiXinApp",
        "name": "RedPacket-hmtl",
        "label": "营销活动",
        "order": 164,
        "type": "html",
        "resource": "ykb/redpacket.html"
    },
    {
        "ModelID": 1020092300,
        "parent": "WeiXinApp",
        "name": "HaoWanManager-hmtl",
        "label": "营销游戏",
        "order": 165,
        "type": "html",
        "resource": "giveability/haowanmanager.html"
    },
    {
        "ModelID": 1020092400,
        "parent": "WeiXinApp",
        "name": "PointsMallManager-hmtl",
        "label": "线上兑换",
        "order": 166,
        "type": "html",
        "resource": "giveability/pointsmallmanager.html"
    },
    {
        "ModelID": 1020092700,
        "parent": "WeiXinApp",
        "name": "OnlineActivity-hmtl",
        "label": "广告图管理",
        "order": 167,
        "type": "html",
        "resource": "ykb/onlineactivity.html"
    },
    {
        "ModelID": 1020093200,
        "parent": "WeiXinApp",
        "name": "StoreManage-hmtl",
        "label": "门店资料维护",
        "order": 168,
        "type": "html",
        "resource": "ykb/storemanage.html"
    },
    {
        "ModelID": 0,
        "parent": "WeiXinApp",
        "name": "Scan",
        "label": "扫码游戏",
        "order": 169
    },
    {
        "ModelID": 101044700,
        "parent": "Scan",
        "name": "/OnLine/VersionSkip?SkipName=ScanGameSchemeSet_SchemeFullNumber",
        "label": "扫码游戏方案",
        "order": 170,
        "resource": "/online/versionskip?skipname=scangameschemeset_schemefullnumber"
    },
    {
        "ModelID": 101044800,
        "parent": "Scan",
        "name": "/OnLine/VersionSkip?SkipName=ScanSchemeRecord_OldScanSchemeQuery",
        "label": "扫码游戏记录",
        "order": 171,
        "resource": "/online/versionskip?skipname=scanschemerecord_oldscanschemequery"
    },
    {
        "ModelID": 0,
        "parent": "WeiXinApp",
        "name": "MarketApp",
        "label": "小程序会员",
        "order": 172
    },
    {
        "ModelID": 1020092800,
        "parent": "MarketApp",
        "name": "OnlineCoupon-hmtl",
        "label": "线上优惠券",
        "order": 173,
        "type": "html",
        "resource": "ykb/onlinecoupon.html"
    },
    {
        "ModelID": 1020093100,
        "parent": "MarketApp",
        "name": "NewGiving-hmtl",
        "label": "新人赠送",
        "order": 174,
        "type": "html",
        "resource": "ykb/newgiving.html"
    },
    {
        "ModelID": 1020093700,
        "parent": "MarketApp",
        "name": "LeaguerpPotocol-hmtl",
        "label": "会员协议",
        "order": 175,
        "type": "html",
        "resource": "ykb/leaguerppotocol.html"
    },
    {
        "ModelID": 1020093800,
        "parent": "MarketApp",
        "name": "JoinInSetMeal-hmtl",
        "label": "小程序入会设置",
        "order": 176,
        "type": "html",
        "resource": "ykb/joininsetmeal.html"
    },
    {
        "ModelID": 1020093900,
        "parent": "MarketApp",
        "name": "EquityManage-hmtl",
        "label": "小程序储值别名",
        "order": 177,
        "type": "html",
        "resource": "ykb/equitymanage.html"
    },
    {
        "ModelID": 0,
        "parent": "WeiXinApp",
        "name": "GoodsApp",
        "label": "异常订单",
        "order": 178
    },
    {
        "ModelID": 1020092200,
        "parent": "GoodsApp",
        "name": "ExceptionOrder-hmtl",
        "label": "小程序异常订单",
        "order": 179,
        "type": "html",
        "resource": "ykb/exceptionorder.html"
    },
    {
        "ModelID": 1020093600,
        "parent": "GoodsApp",
        "name": "CinemaExceptionOrder-hmtl",
        "label": "影院订单管理",
        "order": 180,
        "type": "html",
        "resource": "ykb/cinemaexceptionorder.html"
    },
    {
        "ModelID": 0,
        "name": "Stock",
        "label": "仓库",
        "order": 7
    },
    {
        "ModelID": 100002600,
        "parent": "Stock",
        "name": "StockSet-hmtl",
        "label": "仓库设置",
        "order": 181,
        "type": "html",
        "resource": "inventory/stockset.html"
    },
    {
        "ModelID": 101045000,
        "parent": "Stock",
        "name": "AutoAudit-hmtl",
        "label": "仓库基础设置",
        "order": 182,
        "type": "html",
        "resource": "inventory/autoaudit.html"
    },
    {
        "ModelID": 0,
        "parent": "Stock",
        "name": "DocumentManagement",
        "label": "单据管理",
        "order": 183
    },
    {
        "ModelID": 100002500,
        "parent": "DocumentManagement",
        "name": "PurchaseOrder-hmtl",
        "label": "采购单",
        "order": 184,
        "type": "html",
        "resource": "inventory/purchaseorder.html"
    },
    {
        "ModelID": 100002800,
        "parent": "DocumentManagement",
        "name": "StockIn-hmtl",
        "label": "入库单",
        "order": 185,
        "type": "html",
        "resource": "inventory/stockin.html"
    },
    {
        "ModelID": 100003000,
        "parent": "DocumentManagement",
        "name": "StockTransfer-hmtl",
        "label": "调拨单",
        "order": 186,
        "type": "html",
        "resource": "inventory/stocktransfer.html"
    },
    {
        "ModelID": 100002900,
        "parent": "DocumentManagement",
        "name": "StockOut-hmtl",
        "label": "出库单",
        "order": 187,
        "type": "html",
        "resource": "inventory/stockout.html"
    },
    {
        "ModelID": 100003100,
        "parent": "DocumentManagement",
        "name": "StockCheck-hmtl",
        "label": "盘点录入",
        "order": 188,
        "type": "html",
        "resource": "inventory/stockcheck.html"
    },
    {
        "ModelID": 100003200,
        "parent": "DocumentManagement",
        "name": "StockCheckPass-hmtl",
        "label": "盘点审核",
        "order": 189,
        "type": "html",
        "resource": "inventory/stockcheckpass.html"
    },
    {
        "ModelID": 1010093100,
        "parent": "DocumentManagement",
        "name": "FastStockCheck-hmtl",
        "label": "快速盘点",
        "order": 190,
        "type": "html",
        "resource": "inventory/faststockcheck.html"
    },
    {
        "ModelID": 1010091700,
        "parent": "DocumentManagement",
        "name": "MachineStockManager-hmtl",
        "label": "机台库存管理",
        "order": 191,
        "type": "html",
        "resource": "game/machinestockmanager.html"
    },
    {
        "ModelID": 0,
        "parent": "Stock",
        "name": "SaleOut",
        "label": "销售出货",
        "order": 192
    },
    {
        "ModelID": 1010090200,
        "parent": "SaleOut",
        "name": "StockOutOrder-hmtl",
        "label": "出货单",
        "order": 193,
        "type": "html",
        "resource": "inventory/stockoutorder.html"
    },
    {
        "ModelID": 1010090300,
        "parent": "SaleOut",
        "name": "StockReurnsOrder-hmtl",
        "label": "退货单",
        "order": 194,
        "type": "html",
        "resource": "inventory/stockreurnsorder.html"
    },
    {
        "ModelID": 1010090500,
        "parent": "SaleOut",
        "name": "StockOutOrderQuery-hmtl",
        "label": "出货记录查询",
        "order": 195,
        "type": "html",
        "resource": "inventory/stockoutorderquery.html"
    },
    {
        "ModelID": 0,
        "parent": "Stock",
        "name": "StockTransfer",
        "label": "跨店调拨",
        "order": 196
    },
    {
        "ModelID": 1010091400,
        "parent": "StockTransfer",
        "name": "StockTransApp-hmtl",
        "label": "调拨申请",
        "order": 197,
        "type": "html",
        "resource": "inventory/stocktransapp.html"
    },
    {
        "ModelID": 1010091500,
        "parent": "StockTransfer",
        "name": "StockTransAppAudit-hmtl",
        "label": "调拨审核",
        "order": 198,
        "type": "html",
        "resource": "inventory/stocktransappaudit.html"
    },
    {
        "ModelID": 1010090900,
        "parent": "StockTransfer",
        "name": "StockTransReceive-hmtl",
        "label": "调拨入库",
        "order": 199,
        "type": "html",
        "resource": "inventory/stocktransreceive.html"
    },
    {
        "ModelID": 1010090800,
        "parent": "StockTransfer",
        "name": "StockTransShip-hmtl",
        "label": "调拨出库",
        "order": 200,
        "type": "html",
        "resource": "inventory/stocktransship.html"
    },
    {
        "ModelID": 1010092400,
        "parent": "StockTransfer",
        "name": "WaitingStockInQuery-hmtl",
        "label": "调拨待入库查询",
        "order": 201,
        "type": "html",
        "resource": "inventory/waitingstockinquery.html"
    },
    {
        "ModelID": 1010092300,
        "parent": "StockTransfer",
        "name": "WaitingStockOutQuery-hmtl",
        "label": "调拨待出库查询",
        "order": 202,
        "type": "html",
        "resource": "inventory/waitingstockoutquery.html"
    },
    {
        "ModelID": 1010091200,
        "parent": "StockTransfer",
        "name": "StockTransInQuery-hmtl",
        "label": "调拨已入库查询",
        "order": 203,
        "type": "html",
        "resource": "inventory/stocktransinquery.html"
    },
    {
        "ModelID": 1010091100,
        "parent": "StockTransfer",
        "name": "StockTransOutQuery-hmtl",
        "label": "调拨已出库查询",
        "order": 204,
        "type": "html",
        "resource": "inventory/stocktransoutquery.html"
    },
    {
        "ModelID": 0,
        "parent": "Stock",
        "name": "StockReport",
        "label": "仓储报表",
        "order": 205
    },
    {
        "ModelID": 100003400,
        "parent": "StockReport",
        "name": "GoodsStockQuery-hmtl",
        "label": "库存查询",
        "order": 206,
        "type": "html",
        "resource": "inventory/goodsstockquery.html"
    },
    {
        "ModelID": 100013400,
        "parent": "StockReport",
        "name": "SingleGoodsStockQuery-hmtl",
        "label": "单品库存查询",
        "order": 207,
        "type": "html",
        "resource": "inventory/singlegoodsstockquery.html"
    },
    {
        "ModelID": 101004600,
        "parent": "StockReport",
        "name": "GoodsStockQueryHistory-hmtl",
        "label": "历史库存查询",
        "order": 208,
        "type": "html",
        "resource": "inventory/goodsstockqueryhistory.html"
    },
    {
        "ModelID": 100003500,
        "parent": "StockReport",
        "name": "GoodsStockChange-hmtl",
        "label": "库存变更查询",
        "order": 209,
        "type": "html",
        "resource": "inventory/goodsstockchange.html"
    },
    {
        "ModelID": 100003300,
        "parent": "StockReport",
        "name": "StockCheckQuery-hmtl",
        "label": "盘点盈亏查询",
        "order": 210,
        "type": "html",
        "resource": "inventory/stockcheckquery.html"
    },
    {
        "ModelID": 101004700,
        "parent": "StockReport",
        "name": "StockInCollect-hmtl",
        "label": "供应商入库汇总",
        "order": 211,
        "type": "html",
        "resource": "inventory/stockincollect.html"
    },
    {
        "ModelID": 0,
        "name": "Finance",
        "label": "财务",
        "order": 8
    },
    {
        "ModelID": 100006700,
        "parent": "Finance",
        "name": "CashListDone_new-hmtl",
        "label": "账期做实",
        "order": 212,
        "type": "html",
        "resource": "finance/cashlistdone_new.html"
    },
    {
        "ModelID": 0,
        "parent": "Finance",
        "name": "CheckOut",
        "label": "结账查询",
        "order": 213
    },
    {
        "ModelID": 1020090500,
        "parent": "CheckOut",
        "name": "SaleDetailRptV2-hmtl",
        "label": "销售明细表",
        "order": 214,
        "type": "html",
        "resource": "aofei/saledetailrptv2.html"
    },
    {
        "ModelID": 101039700,
        "parent": "CheckOut",
        "name": "ManagmentRpt-hmtl",
        "label": "经营报表",
        "order": 215,
        "type": "html",
        "resource": "finance/managmentrpt.html"
    },
    {
        "ModelID": 100006600,
        "parent": "CheckOut",
        "name": "CashListQuery_new-hmtl",
        "label": "结账历史查询",
        "order": 216,
        "type": "html",
        "resource": "finance/cashlistquery_new.html"
    },
    {
        "ModelID": 100006900,
        "parent": "CheckOut",
        "name": "EmpRealMoneyQuery-hmtl",
        "label": "收银员交账查询",
        "order": 217,
        "type": "html",
        "resource": "finance/emprealmoneyquery.html"
    },
    {
        "ModelID": 1020089600,
        "parent": "CheckOut",
        "name": "EmpSaleGoodsQuery-hmtl",
        "label": "收银员销售一览表",
        "order": 218,
        "type": "html",
        "resource": "finance/empsalegoodsquery.html"
    },
    {
        "ModelID": 100008200,
        "parent": "CheckOut",
        "name": "OrderQuery-hmtl",
        "label": "支付订单查询",
        "order": 219,
        "type": "html",
        "resource": "goods/orderquery.html"
    },
    {
        "ModelID": 100010200,
        "parent": "CheckOut",
        "name": "OrderItemQuery-hmtl",
        "label": "商品订单查询",
        "order": 220,
        "type": "html",
        "resource": "goods/orderitemquery.html"
    },
    {
        "ModelID": 100030200,
        "parent": "CheckOut",
        "name": "OrderItemSumQuery-hmtl",
        "label": "销售统计报表",
        "order": 221,
        "type": "html",
        "resource": "goods/orderitemsumquery.html"
    },
    {
        "ModelID": 1010092200,
        "parent": "CheckOut",
        "name": "AreaReport-hmtl",
        "label": "区域报表",
        "order": 222,
        "type": "html",
        "resource": "finance/areareport.html"
    },
    {
        "ModelID": 1010093000,
        "parent": "CheckOut",
        "name": "ChannelReport-hmtl",
        "label": "渠道报表",
        "order": 223,
        "type": "html",
        "resource": "finance/channelreport.html"
    },
    {
        "ModelID": 100007000,
        "parent": "CheckOut",
        "name": "ReturnMoney-hmtl",
        "label": "订单退款",
        "order": 224,
        "type": "html",
        "resource": "finance/returnmoney.html"
    },
    {
        "ModelID": 100007200,
        "parent": "CheckOut",
        "name": "OtherOutMoney-hmtl",
        "label": "其它支出",
        "order": 225,
        "type": "html",
        "resource": "finance/otheroutmoney.html"
    },
    {
        "ModelID": 100007100,
        "parent": "CheckOut",
        "name": "OtherInMoney-hmtl",
        "label": "其它收入",
        "order": 226,
        "type": "html",
        "resource": "finance/otherinmoney.html"
    },
    {
        "ModelID": 100007800,
        "parent": "CheckOut",
        "name": "OtherInOutMoneyQuery-hmtl",
        "label": "其它收支统计",
        "order": 227,
        "type": "html",
        "resource": "finance/otherinoutmoneyquery.html"
    },
    {
        "ModelID": 100007900,
        "parent": "CheckOut",
        "name": "PayBalanceQuery-hmtl",
        "label": "支付对账查询",
        "order": 228,
        "type": "html",
        "resource": "finance/paybalancequery.html"
    },
    {
        "ModelID": 100006800,
        "parent": "CheckOut",
        "name": "OrderPayTypeUpdate-hmtl",
        "label": "订单支付方式修改",
        "order": 229,
        "type": "html",
        "resource": "finance/orderpaytypeupdate.html"
    },
    {
        "ModelID": 1030102100,
        "parent": "CheckOut",
        "name": "NcVoucherPush-hmtl",
        "label": "NC凭证推送",
        "order": 230,
        "type": "html",
        "resource": "finance/ncvoucherpush.html"
    },
    {
        "ModelID": 1030102500,
        "parent": "CheckOut",
        "name": "LeaguerUnjoinApply-hmtl",
        "label": "会员退费申请",
        "order": 231,
        "type": "html",
        "resource": "leaguer/leaguerunjoinapply.html"
    },
    {
        "ModelID": 0,
        "parent": "Finance",
        "name": "PerformanceManagement",
        "label": "绩效管理",
        "order": 232
    },
    {
        "ModelID": 101006600,
        "parent": "PerformanceManagement",
        "name": "ExtractUnitSet-hmtl",
        "label": "岗位绩效设置",
        "order": 233,
        "type": "html",
        "resource": "game/extractunitset.html"
    },
    {
        "ModelID": 101007800,
        "parent": "PerformanceManagement",
        "name": "ExtractReadCard-hmtl",
        "label": "绩效刷卡查询",
        "order": 234,
        "type": "html",
        "resource": "game/extractreadcard.html"
    },
    {
        "ModelID": 101006800,
        "parent": "PerformanceManagement",
        "name": "ExtractPersonTotal-hmtl",
        "label": "个人绩效统计",
        "order": 235,
        "type": "html",
        "resource": "game/extractpersontotal.html"
    },
    {
        "ModelID": 101007700,
        "parent": "PerformanceManagement",
        "name": "CasherExtract-hmtl",
        "label": "收银员业绩报表",
        "order": 236,
        "type": "html",
        "resource": "finance/casherextract.html"
    },
    {
        "ModelID": 0,
        "parent": "Finance",
        "name": "FinanceReport",
        "label": "财务报表",
        "order": 237
    },
    {
        "ModelID": 100008500,
        "parent": "FinanceReport",
        "name": "EdayValueRpt-hmtl",
        "label": "会员储值平衡表",
        "order": 238,
        "type": "html",
        "resource": "finance/edayvaluerpt.html"
    },
    {
        "ModelID": 101014100,
        "parent": "FinanceReport",
        "name": "StockInOutQueryByMonth-hmtl",
        "label": "商品出入库结存表",
        "order": 239,
        "type": "html",
        "resource": "inventory/stockinoutquerybymonth.html"
    },
    {
        "ModelID": 101014200,
        "parent": "FinanceReport",
        "name": "EveryStockInOut-hmtl",
        "label": "各库出入金额统计",
        "order": 240,
        "type": "html",
        "resource": "inventory/everystockinout.html"
    },
    {
        "ModelID": 101005200,
        "parent": "FinanceReport",
        "name": "SelfGoodsInComeCostRpt-hmtl",
        "label": "商品收入成本表",
        "order": 241,
        "type": "html",
        "resource": "finance/selfgoodsincomecostrpt.html"
    },
    {
        "ModelID": 101007600,
        "parent": "FinanceReport",
        "name": "GoodClsProfit-hmtl",
        "label": "品类毛利分析",
        "order": 242,
        "type": "html",
        "resource": "finance/goodclsprofit.html"
    },
    {
        "ModelID": 100008400,
        "parent": "FinanceReport",
        "name": "EdayIncomeRpt-hmtl",
        "label": "毛利日报表",
        "order": 243,
        "type": "html",
        "resource": "finance/edayincomerpt.html"
    },
    {
        "ModelID": 1010189900,
        "parent": "FinanceReport",
        "name": "FinaceDataReport-hmtl",
        "label": "财务确认收入报表",
        "order": 244,
        "type": "html",
        "resource": "finance/finacedatareport.html"
    },
    {
        "ModelID": 1010090000,
        "parent": "FinanceReport",
        "name": "FinaceDataDetail-hmtl",
        "label": "财务确认收入明细",
        "order": 245,
        "type": "html",
        "resource": "finance/finacedatadetail.html"
    },
    {
        "ModelID": 1030102200,
        "parent": "FinanceReport",
        "name": "MachineIncomeAnalysis-hmtl",
        "label": "机台收入分析表",
        "order": 246,
        "type": "html",
        "resource": "game/machineincomeanalysis.html"
    },
    {
        "ModelID": 0,
        "parent": "Finance",
        "name": "Indicator",
        "label": "业绩指标",
        "order": 247
    },
    {
        "ModelID": 1030102400,
        "parent": "Indicator",
        "name": "BizDayIndicatorSet-hmtl",
        "label": "日指标设置",
        "order": 248,
        "type": "html",
        "resource": "indicator/bizdayindicatorset.html"
    },
    {
        "ModelID": 1030100600,
        "parent": "Indicator",
        "name": "BizYearIndicatorRpt-hmtl",
        "label": "年度指标完成情况",
        "order": 249,
        "type": "html",
        "resource": "indicator/bizyearindicatorrpt.html"
    },
    {
        "ModelID": 1030100700,
        "parent": "Indicator",
        "name": "BizMonthIndicatorRpt-hmtl",
        "label": "月度指标完成情况",
        "order": 250,
        "type": "html",
        "resource": "indicator/bizmonthindicatorrpt.html"
    },
    {
        "ModelID": 0,
        "parent": "Finance",
        "name": "FinanceBaseSet",
        "label": "基础设置",
        "order": 251
    },
    {
        "ModelID": 100007300,
        "parent": "FinanceBaseSet",
        "name": "OtherInOutMoneySet-hmtl",
        "label": "收支分类设置",
        "order": 252,
        "type": "html",
        "resource": "finance/otherinoutmoneyset.html"
    },
    {
        "ModelID": 100006400,
        "parent": "FinanceBaseSet",
        "name": "PayTypeSet-hmtl",
        "label": "支付方式设置",
        "order": 253,
        "type": "html",
        "resource": "pay/paytypeset.html"
    },
    {
        "ModelID": 1030101900,
        "parent": "FinanceBaseSet",
        "name": "DepartmentSet-hmtl",
        "label": "部门设置",
        "order": 254,
        "type": "html",
        "resource": "finance/departmentset.html"
    },
    {
        "ModelID": 101041300,
        "parent": "FinanceBaseSet",
        "name": "CashierParmsSet-hmtl",
        "label": "收银基础参数",
        "order": 255,
        "type": "html",
        "resource": "finance/cashierparmsset.html"
    },
    {
        "ModelID": 0,
        "name": "RePort",
        "label": "报表",
        "order": 9
    },
    {
        "ModelID": 0,
        "parent": "RePort",
        "name": "LeaguerQuery",
        "label": "会员查询",
        "order": 256
    },
    {
        "ModelID": 100001400,
        "parent": "LeaguerQuery",
        "name": "LgInfoList-hmtl",
        "label": "会员资料查询",
        "order": 257,
        "type": "html",
        "resource": "leaguer/lginfolist.html"
    },
    {
        "ModelID": 100008600,
        "parent": "LeaguerQuery",
        "name": "LgJoinChargeLog-hmtl",
        "label": "入会记录查询",
        "order": 258,
        "type": "html",
        "resource": "leaguer/lgjoinchargelog.html"
    },
    {
        "ModelID": 101021000,
        "parent": "LeaguerQuery",
        "name": "LgCardList-hmtl",
        "label": "会员卡查询",
        "order": 259,
        "type": "html",
        "resource": "leaguer/lgcardlist.html"
    },
    {
        "ModelID": 100001500,
        "parent": "LeaguerQuery",
        "name": "LgInfoEditLog-hmtl",
        "label": "会员信息变更记录",
        "order": 260,
        "type": "html",
        "resource": "leaguer/lginfoeditlog.html"
    },
    {
        "ModelID": 101016100,
        "parent": "LeaguerQuery",
        "name": "QueryChangeCard-hmtl",
        "label": "会员补卡换卡查询",
        "order": 261,
        "type": "html",
        "resource": "leaguer/querychangecard.html"
    },
    {
        "ModelID": 100001800,
        "parent": "LeaguerQuery",
        "name": "LgUnJoin-hmtl",
        "label": "会员注销记录",
        "order": 262,
        "type": "html",
        "resource": "leaguer/lgunjoin.html"
    },
    {
        "ModelID": 0,
        "parent": "RePort",
        "name": "LeaguerValues",
        "label": "会员储值",
        "order": 263
    },
    {
        "ModelID": 101000600,
        "parent": "LeaguerValues",
        "name": "BusinessLgVlaueChangeQuery-hmtl",
        "label": "储值变更查询",
        "order": 264,
        "type": "html",
        "resource": "game/businesslgvlauechangequery.html"
    },
    {
        "ModelID": 1030093500,
        "parent": "LeaguerValues",
        "name": "ValueAddedServiceQuery-hmtl",
        "label": "增值服务储值变更",
        "order": 265,
        "type": "html",
        "resource": "leaguer/valueaddedservicequery.html"
    },
    {
        "ModelID": 101012400,
        "parent": "LeaguerValues",
        "name": "AreaCoinTransferQuery-hmtl",
        "label": "储值转账查询",
        "order": 266,
        "type": "html",
        "resource": "game/areacointransferquery.html"
    },
    {
        "ModelID": 101001100,
        "parent": "LeaguerValues",
        "name": "GivingCoinLog-hmtl",
        "label": "赠补币记录",
        "order": 267,
        "type": "html",
        "resource": "game/givingcoinlog.html"
    },
    {
        "ModelID": 100008700,
        "parent": "LeaguerValues",
        "name": "LgPrepaidChargeLog-hmtl",
        "label": "预存款充值查询",
        "order": 268,
        "type": "html",
        "resource": "leaguer/lgprepaidchargelog.html"
    },
    {
        "ModelID": 1030094600,
        "parent": "LeaguerValues",
        "name": "CancelPrepaidLog-hmtl",
        "label": "预存款退款查询",
        "order": 269,
        "type": "html",
        "resource": "leaguer/cancelprepaidlog.html"
    },
    {
        "ModelID": 101014800,
        "parent": "LeaguerValues",
        "name": "LotteryLogSearch-hmtl",
        "label": "彩票暂存记录",
        "order": 270,
        "type": "html",
        "resource": "game/lotterylogsearch.html"
    },
    {
        "ModelID": 101017400,
        "parent": "LeaguerValues",
        "name": "CoinRoaming-hmtl",
        "label": "会员漫游记录",
        "order": 271,
        "type": "html",
        "resource": "game/coinroaming.html"
    },
    {
        "ModelID": 101020300,
        "parent": "LeaguerValues",
        "name": "MachineIniScoreLogQuery-hmtl",
        "label": "项目分数查询",
        "order": 272,
        "type": "html",
        "resource": "game/machineiniscorelogquery.html"
    },
    {
        "ModelID": 101043700,
        "parent": "LeaguerValues",
        "name": "SportConsumeQuery-hmtl",
        "label": "体育类消费查询",
        "order": 273,
        "type": "html",
        "resource": "sports/sportconsumequery.html"
    },
    {
        "ModelID": 101002410,
        "parent": "LeaguerValues",
        "name": "LockerUseLog-hmtl",
        "label": "储物柜使用记录",
        "order": 274,
        "type": "html",
        "resource": "game/lockeruselog.html"
    },
    {
        "ModelID": 100015800,
        "parent": "LeaguerValues",
        "name": "LgSaveTicketQuery-hmtl",
        "label": "会员存票排行",
        "order": 275,
        "type": "html",
        "resource": "game/lgsaveticketquery.html"
    },
    {
        "ModelID": 100015900,
        "parent": "LeaguerValues",
        "name": "LgValueFrozenLog-hmtl",
        "label": "冻结储值管理",
        "order": 276,
        "type": "html",
        "resource": "leaguer/lgvaluefrozenlog.html"
    },
    {
        "ModelID": 0,
        "parent": "RePort",
        "name": "PackageSaleType",
        "label": "套餐销售类",
        "order": 277
    },
    {
        "ModelID": 101000900,
        "parent": "PackageSaleType",
        "name": "CoinMealSaleLogQuery-hmtl",
        "label": "售币记录",
        "order": 278,
        "type": "html",
        "resource": "game/coinmealsalelogquery.html"
    },
    {
        "ModelID": 100008300,
        "parent": "PackageSaleType",
        "name": "EdaySaleRpt-hmtl",
        "label": "销售报表",
        "order": 279,
        "type": "html",
        "resource": "finance/edaysalerpt.html"
    },
    {
        "ModelID": 1020089700,
        "parent": "PackageSaleType",
        "name": "GoodsSaleLog-hmtl",
        "label": "商品销售记录",
        "order": 280,
        "type": "html",
        "resource": "finance/goodssalelog.html"
    },
    {
        "ModelID": 101008000,
        "parent": "PackageSaleType",
        "name": "RealGoodsSaleRPT-hmtl",
        "label": "终端商品销售",
        "order": 281,
        "type": "html",
        "resource": "finance/realgoodssalerpt.html"
    },
    {
        "ModelID": 100008100,
        "parent": "PackageSaleType",
        "name": "GoodsSalesClsRpt-hmtl",
        "label": "卖品分类报表",
        "order": 282,
        "type": "html",
        "resource": "finance/goodssalesclsrpt.html"
    },
    {
        "ModelID": 101007900,
        "parent": "PackageSaleType",
        "name": "GoodsSaleHistoryRPT-hmtl",
        "label": "商品销售历史查询",
        "order": 283,
        "type": "html",
        "resource": "finance/goodssalehistoryrpt.html"
    },
    {
        "ModelID": 100004700,
        "parent": "PackageSaleType",
        "name": "/Finance/DTOGoodsTypeSalePage",
        "label": "商品销售趋势",
        "order": 284,
        "resource": "/finance/dtogoodstypesalepage"
    },
    {
        "ModelID": 100004900,
        "parent": "PackageSaleType",
        "name": "UpgradeOrderLog-hmtl",
        "label": "升单查询",
        "order": 285,
        "type": "html",
        "resource": "finance/upgradeorderlog.html"
    },
    {
        "ModelID": 1030101400,
        "parent": "PackageSaleType",
        "name": "AfterSaleOrderLog-hmtl",
        "label": "售后单处理记录",
        "order": 286,
        "type": "html",
        "resource": "finance/aftersaleorderlog.html"
    },
    {
        "ModelID": 0,
        "parent": "RePort",
        "name": "PackageType",
        "label": "套票类",
        "order": 287
    },
    {
        "ModelID": 1030092600,
        "parent": "PackageType",
        "name": "PackageTicketQuery_New-hmtl",
        "label": "套票查询",
        "order": 288,
        "type": "html",
        "resource": "game/packageticketquery_new.html"
    },
    {
        "ModelID": 101000800,
        "parent": "PackageType",
        "name": "PackageTicketQuery-hmtl",
        "label": "套票使用记录",
        "order": 289,
        "type": "html",
        "resource": "game/packageticketquery.html"
    },
    {
        "ModelID": 101010500,
        "parent": "PackageType",
        "name": "PackageTicketApportionRPT-hmtl",
        "label": "套票分摊记录",
        "order": 290,
        "type": "html",
        "resource": "game/packageticketapportionrpt.html"
    },
    {
        "ModelID": 101010600,
        "parent": "PackageType",
        "name": "MachinePackageTicketHotRPT-hmtl",
        "label": "套票消费热度报表",
        "order": 291,
        "type": "html",
        "resource": "game/machinepackagetickethotrpt.html"
    },
    {
        "ModelID": 101003800,
        "parent": "PackageType",
        "name": "MacInPakTitRPTForBiz-hmtl",
        "label": "套票汇总查询",
        "order": 292,
        "type": "html",
        "resource": "game/macinpaktitrptforbiz.html"
    },
    {
        "ModelID": 1030092700,
        "parent": "PackageType",
        "name": "PackageticketOverTimeLog-hmtl",
        "label": "超时结算记录",
        "order": 293,
        "type": "html",
        "resource": "game/packageticketovertimelog.html"
    },
    {
        "ModelID": 1030094200,
        "parent": "PackageType",
        "name": "PackageTicketOverBizUseLog-hmtl",
        "label": "套票跨店使用记录",
        "order": 294,
        "type": "html",
        "resource": "game/packageticketoverbizuselog.html"
    },
    {
        "ModelID": 1030101600,
        "parent": "PackageType",
        "name": "PackageTicketPrintLog-hmtl",
        "label": "套票打印/绑定记录",
        "order": 295,
        "type": "html",
        "resource": "game/packageticketprintlog.html"
    },
    {
        "ModelID": 1030092500,
        "parent": "PackageType",
        "name": "PackageTicketEffectiveTimeEditLog-hmtl",
        "label": "套票有效期修改",
        "order": 296,
        "type": "html",
        "resource": "game/packageticketeffectivetimeeditlog.html"
    },
    {
        "ModelID": 1030094800,
        "parent": "PackageType",
        "name": "PackageTicketTransferLog-hmtl",
        "label": "套票过户记录",
        "order": 297,
        "type": "html",
        "resource": "game/packagetickettransferlog.html"
    },
    {
        "ModelID": 0,
        "parent": "RePort",
        "name": "PhysicalCoin",
        "label": "实物币",
        "order": 298
    },
    {
        "ModelID": 101019500,
        "parent": "PhysicalCoin",
        "name": "PhysicalCoinQueryForGetCoin-hmtl",
        "label": "会员提币记录",
        "order": 299,
        "type": "html",
        "resource": "physicalcoin/physicalcoinqueryforgetcoin.html"
    },
    {
        "ModelID": 101019600,
        "parent": "PhysicalCoin",
        "name": "PhysicalCoinSaveLogQuery-hmtl",
        "label": "会员存币记录",
        "order": 300,
        "type": "html",
        "resource": "physicalcoin/physicalcoinsavelogquery.html"
    },
    {
        "ModelID": 1030095300,
        "parent": "PhysicalCoin",
        "name": "FaceSaveCoinQuery-hmtl",
        "label": "刷脸存币记录",
        "order": 301,
        "type": "html",
        "resource": "game/facesavecoinquery.html"
    },
    {
        "ModelID": 101019900,
        "parent": "PhysicalCoin",
        "name": "PhysicalCoinAddOrClearCoinLogQuery-hmtl",
        "label": "加币清币记录",
        "order": 302,
        "type": "html",
        "resource": "physicalcoin/physicalcoinaddorclearcoinlogquery.html"
    },
    {
        "ModelID": 101043400,
        "parent": "PhysicalCoin",
        "name": "PhyCoinReconciliation-hmtl",
        "label": "实物币对账查询",
        "order": 303,
        "type": "html",
        "resource": "physicalcoin/phycoinreconciliation.html"
    },
    {
        "ModelID": 0,
        "parent": "RePort",
        "name": "ExchangeAndRetrieve",
        "label": "兑换与回收",
        "order": 304
    },
    {
        "ModelID": 101016400,
        "parent": "ExchangeAndRetrieve",
        "name": "ExchangeAllRecord-hmtl",
        "label": "会员兑换记录",
        "order": 305,
        "type": "html",
        "resource": "game/exchangeallrecord.html"
    },
    {
        "ModelID": 101027100,
        "parent": "ExchangeAndRetrieve",
        "name": "GiftRecoverRecord-hmtl",
        "label": "礼品回收查询",
        "order": 306,
        "type": "html",
        "resource": "game/giftrecoverrecord.html"
    },
    {
        "ModelID": 0,
        "parent": "RePort",
        "name": "GameMachineType",
        "label": "游乐项目类",
        "order": 307
    },
    {
        "ModelID": 101005600,
        "parent": "GameMachineType",
        "name": "",
        "label": "项目消费汇总",
        "order": 308,
        "type": "html",
        "resource": ""
    },
    {
        "ModelID": 101005900,
        "parent": "GameMachineType",
        "name": "MachineInGroupForBiz-hmtl",
        "label": "项目消费占比表",
        "order": 309,
        "type": "html",
        "resource": "game/machineingroupforbiz.html"
    },
    {
        "ModelID": 101007300,
        "parent": "GameMachineType",
        "name": "MachineSaleTrendNew-hmtl",
        "label": "项目时段报表",
        "order": 310,
        "type": "html",
        "resource": "game/machinesaletrendnew.html"
    },
    {
        "ModelID": 101009000,
        "parent": "GameMachineType",
        "name": "LgValueContrastRpt-hmtl",
        "label": "项目消费月对比",
        "order": 311,
        "type": "html",
        "resource": "game/lgvaluecontrastrpt.html"
    },
    {
        "ModelID": 101014900,
        "parent": "GameMachineType",
        "name": "GateInOutLogQueryNew-hmtl",
        "label": "闸机进出记录",
        "order": 312,
        "type": "html",
        "resource": "game/gateinoutlogquerynew.html"
    },
    {
        "ModelID": 101004300,
        "parent": "GameMachineType",
        "name": "MacHumanTrafficRpt-hmtl",
        "label": "闸机人流量报表",
        "order": 313,
        "type": "html",
        "resource": "game/machumantrafficrpt.html"
    },
    {
        "ModelID": 101145100,
        "parent": "GameMachineType",
        "name": "MachineNoticeLog-hmtl",
        "label": "项目消费消息推送",
        "order": 314,
        "type": "html",
        "resource": "game/machinenoticelog.html"
    },
    {
        "ModelID": 101045100,
        "parent": "GameMachineType",
        "name": "CarPlayLogQuery-hmtl",
        "label": "卡丁车发车记录",
        "order": 315,
        "type": "html",
        "resource": "game/carplaylogquery.html"
    },
    {
        "ModelID": 1010094900,
        "parent": "GameMachineType",
        "name": "MachinePortResult-hmtl",
        "label": "游戏分数查询",
        "order": 316,
        "type": "html",
        "resource": "game/machineportresult.html"
    },
    {
        "ModelID": 0,
        "parent": "RePort",
        "name": "MachineType",
        "label": "机台类",
        "order": 317
    },
    {
        "ModelID": 101044500,
        "parent": "MachineType",
        "name": "MachineSaleQuery-hmtl",
        "label": "项目消费查询",
        "order": 318,
        "type": "html",
        "resource": "game/machinesalequery.html"
    },
    {
        "ModelID": 101044900,
        "parent": "MachineType",
        "name": "CoinTicketGiftSaleQuery-hmtl",
        "label": "机台经营报表",
        "order": 319,
        "type": "html",
        "resource": "game/cointicketgiftsalequery.html"
    },
    {
        "ModelID": 1010089200,
        "parent": "MachineType",
        "name": "MachineLotteryOutLog-hmtl",
        "label": "出彩票记录",
        "order": 320,
        "type": "html",
        "resource": "game/machinelotteryoutlog.html"
    },
    {
        "ModelID": 101021900,
        "parent": "MachineType",
        "name": "MachineOutGiftLog-hmtl",
        "label": "出礼品记录",
        "order": 321,
        "type": "html",
        "resource": "game/machineoutgiftlog.html"
    },
    {
        "ModelID": 100015700,
        "parent": "MachineType",
        "name": "MachineOutCoinLog-hmtl",
        "label": "出币记录",
        "order": 322,
        "type": "html",
        "resource": "game/machineoutcoinlog.html"
    },
    {
        "ModelID": 1030100100,
        "parent": "MachineType",
        "name": "GiftReturnRate-hmtl",
        "label": "礼品返奖概率",
        "order": 323,
        "type": "html",
        "resource": "game/giftreturnrate.html"
    },
    {
        "ModelID": 1030100200,
        "parent": "MachineType",
        "name": "LotteryReturnRate-hmtl",
        "label": "彩票返奖概率",
        "order": 324,
        "type": "html",
        "resource": "game/lotteryreturnrate.html"
    },
    {
        "ModelID": 101015500,
        "parent": "MachineType",
        "name": "MachinePortCounterLogData-hmtl",
        "label": "手抄码表",
        "order": 325,
        "type": "html",
        "resource": "game/machineportcounterlogdata.html"
    },
    {
        "ModelID": 101003700,
        "parent": "MachineType",
        "name": "MacInCoinEdayQueryForBiz-hmtl",
        "label": "投币汇总查询",
        "order": 326,
        "type": "html",
        "resource": "game/macincoinedayqueryforbiz.html"
    },
    {
        "ModelID": 101004000,
        "parent": "MachineType",
        "name": "MachineCoinDayForbusinRPT-hmtl",
        "label": "投币日期汇总",
        "order": 327,
        "type": "html",
        "resource": "game/machinecoindayforbusinrpt.html"
    },
    {
        "ModelID": 0,
        "name": "Set",
        "label": "设置",
        "order": 10
    },
    {
        "ModelID": 100000400,
        "parent": "Set",
        "name": "/user-management",
        "label": "用户管理",
        "order": 328,
        "type": "new",
        "resource": "system/user-management"
    },
    {
        "ModelID": 101008600,
        "parent": "Set",
        "name": "/role-management",
        "label": "角色管理",
        "order": 329,
        "type": "new",
        "resource": "system/role-management"
    },
    {
        "ModelID": 101004200,
        "parent": "Set",
        "name": "AuthenticationLog-hmtl",
        "label": "授权记录",
        "order": 330,
        "type": "html",
        "resource": "global/authenticationlog.html"
    },
    {
        "ModelID": 1010123000,
        "parent": "Set",
        "name": "MOHome-hmtl",
        "label": "游乐掌柜",
        "order": 331,
        "type": "html",
        "resource": "manageonline/mohome.html"
    },
    {
        "ModelID": 1010094700,
        "parent": "Set",
        "name": "MicroReportSet-hmtl",
        "label": "手机报表设置",
        "order": 332,
        "type": "html",
        "resource": "microreport/microreportset.html"
    },
    {
        "ModelID": 1010094800,
        "parent": "Set",
        "name": "UserBindWX-hmtl",
        "label": "手机报表绑定",
        "order": 333,
        "type": "html",
        "resource": "microreport/userbindwx.html"
    },
    {
        "ModelID": 101001700,
        "parent": "Set",
        "name": "CalendarSet-hmtl",
        "label": "日历管理",
        "order": 334,
        "type": "html",
        "resource": "ticket/calendarset.html"
    },
    {
        "ModelID": 100000600,
        "parent": "Set",
        "name": "ClientUISet-hmtl",
        "label": "收银界面管理",
        "order": 335,
        "type": "html",
        "resource": "clientuiset.html"
    },
    {
        "ModelID": 1013093000,
        "parent": "Set",
        "name": "",
        "label": "系统设置",
        "order": 336,
        "type": "html",
        "resource": ""
    },
    {
        "ModelID": 0,
        "parent": "Set",
        "name": "OperationManage",
        "label": "运维管理",
        "order": 337
    },
    {
        "ModelID": 101042000,
        "parent": "OperationManage",
        "name": "ThirdPartyAPI-hmtl",
        "label": "第三方接口私钥",
        "order": 338,
        "type": "html",
        "resource": "global/thirdpartyapi.html"
    },
    {
        "ModelID": 101004100,
        "parent": "OperationManage",
        "name": "DbBackupSet-hmtl",
        "label": "数据库备份设置",
        "order": 339,
        "type": "html",
        "resource": "global/dbbackupset.html"
    },
    {
        "ModelID": 101005700,
        "parent": "OperationManage",
        "name": "MallSyncStatus-hmtl",
        "label": "总部分发数据监控",
        "order": 340,
        "type": "html",
        "resource": "taskmonitor/mallsyncstatus.html"
    },
    {
        "ModelID": 101012300,
        "parent": "OperationManage",
        "name": "DataArrangementSet-hmtl",
        "label": "数据修复",
        "order": 341,
        "type": "html",
        "resource": "global/dataarrangementset.html"
    },
    {
        "ModelID": 101016000,
        "parent": "OperationManage",
        "name": "RemoteUpdate-hmtl",
        "label": "远程升级",
        "order": 342,
        "type": "html",
        "resource": "global/remoteupdate.html"
    },
    {
        "ModelID": 101018300,
        "parent": "OperationManage",
        "name": "MayMachineStopCenter-hmtl",
        "label": "疑似停机报表",
        "order": 343,
        "type": "html",
        "resource": "game/maymachinestopcenter.html"
    },
    {
        "ModelID": 100010900,
        "parent": "OperationManage",
        "name": "MessageSendLogQuery-hmtl",
        "label": "短信发送记录",
        "order": 344,
        "type": "html",
        "resource": "game/messagesendlogquery.html"
    },
    {
        "ModelID": 101017800,
        "parent": "OperationManage",
        "name": "InitLgAccount-hmtl",
        "label": "储值平衡表初始化",
        "order": 345,
        "type": "html",
        "resource": "leaguer/initlgaccount.html"
    },
    {
        "ModelID": 101008700,
        "parent": "OperationManage",
        "name": "TaskQuery-hmtl",
        "label": "定时任务监控",
        "order": 346,
        "type": "html",
        "resource": "mall/taskquery.html"
    },
    {
        "ModelID": 1010091900,
        "parent": "OperationManage",
        "name": "TaiYangBuLuo-hmtl",
        "label": "景区信息设置",
        "order": 347,
        "type": "html",
        "resource": "thirdparty/taiyangbuluo.html"
    },
    {
        "ModelID": 1010091600,
        "parent": "OperationManage",
        "name": "LgValueChangeQuerySet-hmtl",
        "label": "储值查询设置",
        "order": 348,
        "type": "html",
        "resource": "global/lgvaluechangequeryset.html"
    },
    {
        "ModelID": 1010091300,
        "parent": "OperationManage",
        "name": "LeaguerQueryShowSet-hmtl",
        "label": "会员查询显示列设置",
        "order": 349,
        "type": "html",
        "resource": "leaguer/leaguerqueryshowset.html"
    },
    {
        "ModelID": 1020091000,
        "parent": "OperationManage",
        "name": "LeaguerCarDetailTipSet-hmtl",
        "label": "会员读卡显示设置",
        "order": 350,
        "type": "html",
        "resource": "leaguer/leaguercardetailtipset.html"
    },
    {
        "ModelID": 101005400,
        "parent": "OperationManage",
        "name": "TaskMonitorList-hmtl",
        "label": "商城数据上报监控",
        "order": 351,
        "type": "html",
        "resource": "taskmonitor/taskmonitorlist.html"
    }
]
