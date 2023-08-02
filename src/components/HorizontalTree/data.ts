import { getUUID } from "@/utils/stringTools";

export const treeData = [
  /*  {
    Id: '69d854b7-417f-4f9f-8744-edbf5d79de3d',
    GroupName: '通用权限',
    GroupMenus: [
      {
        Id: '95428b0b-0b6e-41cc-8b71-f7d3fc0d44e3',
        ClsName: '通用权限',
        Menus: [
          {
            ModelName: '绑定终端',
            ModelID: 90000001,
          },
          {
            ModelName: '查看会员完整手机号',
            ModelID: 90000011,
          },
          {
            ModelName: '卡号后4位以上查会员',
            ModelID: 90000012,
          },
          {
            ModelName: '手机号后4位查会员',
            ModelID: 90000013,
          },
          {
            ModelName: '手动输入会员号码',
            ModelID: 90000002,
          },
          {
            ModelName: '修改登录密码',
            ModelID: 90000003,
          },
          {
            ModelName: '首页-显示',
            ModelID: 90000005,
          },
          {
            ModelName: '手机报表',
            ModelID: 90000006,
          },
          {
            ModelName: '选择登录账期',
            ModelID: 90000007,
          },
          {
            ModelName: 'M42登录',
            ModelID: 90000008,
          },
          {
            ModelName: '设置',
            ModelID: getUUID(),
          },
          {
            ModelName: '月指标设置',
            ModelID: getUUID(),
          },
          {
            ModelName: '日指标设置',
            ModelID: getUUID(),
          },
          {
            ModelName: '删除门店指标',
            ModelID: getUUID(),
          },
        ],
      },
    ],
  },
  {
    Id: 'a42293b6-4047-4326-a182-63423cc9013a',
    GroupName: '总部',
    GroupMenus: [
      {
        Id: 'a3169573-906d-4320-b291-cabcfbc1c1f6',
        ClsName: '用户管理',
        Menus: [
          {
            ModelName: '查询',
            ModelID: 100000401,
          },
        ],
      },
      {
        Id: '9b6c53b9-1b63-4d11-8660-4ed44e651de5',
        ClsName: '角色管理',
        Menus: [
          {
            ModelName: '查询',
            ModelID: 101008601,
          },
        ],
      },
      {
        Id: 'b9164d6f-f750-4467-9b4f-a79ef1f377b8',
        ClsName: '授权记录',
        Menus: [
          {
            ModelName: '查询',
            ModelID: 101004201,
          },
        ],
      },
      {
        Id: '2cd802d9-3309-4451-9138-8e6b48c96f4a',
        ClsName: '门店管理',
        Menus: [
          {
            ModelName: '查询',
            ModelID: 100011001,
          },
        ],
      },
      {
        Id: '58b179c6-0e55-4512-a11a-19d5d578b476',
        ClsName: '区域管理',
        Menus: [
          {
            ModelName: '查询',
            ModelID: 1020089901,
          },
        ],
      },
      {
        Id: '79d52872-9c29-4d83-ab75-6758657ef848',
        ClsName: '门店资源设置',
        Menus: [
          {
            ModelName: '查询',
            ModelID: 1030091801,
          },
        ],
      },
      {
        Id: '4841fcbb-8c0e-4f55-9565-b500e6babbbf',
        ClsName: '门店网络监控',
        Menus: [
          {
            ModelName: '查询',
            ModelID: 1010094601,
          },
        ],
      },
      {
        Id: '60fd343b-f554-418d-be2e-ef1d778927b2',
        ClsName: '指标设置',
        Menus: [
          {
            ModelName: '设置',
            ModelID: getUUID(),
          },
          {
            ModelName: '月指标设置',
            ModelID: getUUID(),
          },
          {
            ModelName: '日指标设置',
            ModelID: getUUID(),
          },
          {
            ModelName: '删除门店指标',
            ModelID: getUUID(),
          },
        ],
      },
      {
        Id: 'b2d5a3e1-d512-4203-960f-776e6ba857c5',
        ClsName: '年指标完成率',
        Menus: [
          {
            ModelName: '查询',
            ModelID: 1030100401,
          },
        ],
      },
      {
        Id: '75013e63-eba1-48d7-a234-557a52abd136',
        ClsName: '月指标完成率',
        Menus: [
          {
            ModelName: '查询',
            ModelID: 1030100501,
          },
        ],
      },
      {
        Id: 'dae0d5c5-dec8-470f-9015-62fc6bea3a25',
        ClsName: '项目分类',
        Menus: [
          {
            ModelName: '查询',
            ModelID: getUUID(),
          },
          {
            ModelName: '新增',
            ModelID: getUUID(),
          },
          {
            ModelName: '编辑',
            ModelID: getUUID(),
          },
          {
            ModelName: '删除',
            ModelID: getUUID(),
          },
        ],
      },
      {
        Id: '1c6e9924-7ec0-4ec7-9abc-bfdda4d2a23c',
        ClsName: '日历管理',
        Menus: [
          {
            ModelName: '查询',
            ModelID: getUUID(),
          },
          {
            ModelName: '新增',
            ModelID: getUUID(),
          },
          {
            ModelName: '编辑',
            ModelID: getUUID(),
          },
          {
            ModelName: '删除',
            ModelID: getUUID(),
          },
        ],
      },
      {
        Id: '5bfd9397-c8d5-4e4c-9316-f75fb3849df1',
        ClsName: '收银界面管理',
        Menus: [
          {
            ModelName: '查询',
            ModelID: getUUID(),
          },
          {
            ModelName: '保存',
            ModelID: getUUID(),
          },
          {
            ModelName: '删除',
            ModelID: getUUID(),
          },
        ],
      },
      {
        Id: getUUID(),
        ClsName: '终端管理',
        Menus: [
          {
            ModelName: '查询',
            ModelID: getUUID(),
          },
          {
            ModelName: '保存',
            ModelID: getUUID(),
          },
          {
            ModelName: '删除',
            ModelID: getUUID(),
          },
        ],
      },
      {
        Id: getUUID(),
        ClsName: '手机报表设置',
        Menus: [
          {
            ModelName: '查询',
            ModelID: 1010094701,
          },
        ],
      },
      {
        Id: getUUID(),
        ClsName: '手机报表绑定',
        Menus: [
          {
            ModelName: '查询',
            ModelID: getUUID(),
          },
          {
            ModelName: '绑定微信',
            ModelID: getUUID(),
          },
          {
            ModelName: '删除',
            ModelID: getUUID(),
          },
        ],
      },
      {
        Id: getUUID(),
        ClsName: '系统设置',
        Menus: [
          {
            ModelName: '查询',
            ModelID: 100000901,
          },
        ],
      },
    ],
  },
  {
    Id: getUUID(),
    GroupName: '通用权限2',
    GroupMenus: [
      {
        Id: getUUID(),
        ClsName: '终端管理',
        Menus: [
          {
            ModelName: '查询',
            ModelID: getUUID(),
          },
          {
            ModelName: '保存',
            ModelID: getUUID(),
          },
          {
            ModelName: '删除',
            ModelID: getUUID(),
          },
        ],
      },
      {
        Id: getUUID(),
        ClsName: '手机报表设置',
        Menus: [
          {
            ModelName: '查询',
            ModelID: 1010094701,
          },
        ],
      },
      {
        Id: getUUID(),
        ClsName: '手机报表绑定',
        Menus: [
          {
            ModelName: '查询',
            ModelID: getUUID(),
          },
          {
            ModelName: '绑定微信',
            ModelID: getUUID(),
          },
          {
            ModelName: '删除',
            ModelID: getUUID(),
          },
        ],
      },
      {
        Id: getUUID(),
        ClsName: '系统设置',
        Menus: [
          {
            ModelName: '查询',
            ModelID: 100000901,
          },
        ],
      },
      {
        Id: getUUID(),
        ClsName: '通用权限',
        Menus: [
          {
            ModelName: '绑定终端',
            ModelID: 90000001,
          },
          {
            ModelName: '查看会员完整手机号',
            ModelID: 90000011,
          },
          {
            ModelName: '卡号后4位以上查会员',
            ModelID: 90000012,
          },
          {
            ModelName: '手机号后4位查会员',
            ModelID: 90000013,
          },
          {
            ModelName: '手动输入会员号码',
            ModelID: 90000002,
          },
          {
            ModelName: '修改登录密码',
            ModelID: 90000003,
          },
          {
            ModelName: '首页-显示',
            ModelID: 90000005,
          },
          {
            ModelName: '手机报表',
            ModelID: 90000006,
          },
          {
            ModelName: '选择登录账期',
            ModelID: 90000007,
          },
          {
            ModelName: 'M42登录',
            ModelID: 90000008,
          },
        ],
      },
    ],
  },
  {
    Id: getUUID(),
    GroupName: '通用权限3',
    GroupMenus: [
      {
        Id: getUUID(),
        ClsName: '终端管理',
        Menus: [
          {
            ModelName: '查询',
            ModelID: getUUID(),
          },
          {
            ModelName: '保存',
            ModelID: getUUID(),
          },
          {
            ModelName: '删除',
            ModelID: getUUID(),
          },
        ],
      },
      {
        Id: getUUID(),
        ClsName: '手机报表设置',
        Menus: [
          {
            ModelName: '查询',
            ModelID: 1010094701,
          },
        ],
      },
      {
        Id: getUUID(),
        ClsName: '手机报表绑定',
        Menus: [
          {
            ModelName: '查询',
            ModelID: getUUID(),
          },
          {
            ModelName: '绑定微信',
            ModelID: getUUID(),
          },
          {
            ModelName: '删除',
            ModelID: getUUID(),
          },
        ],
      },
      {
        Id: getUUID(),
        ClsName: '系统设置',
        Menus: [
          {
            ModelName: '查询',
            ModelID: 100000901,
          },
        ],
      },
      {
        Id: getUUID(),
        ClsName: '通用权限',
        Menus: [
          {
            ModelName: '绑定终端',
            ModelID: 90000001,
          },
          {
            ModelName: '查看会员完整手机号',
            ModelID: 90000011,
          },
          {
            ModelName: '卡号后4位以上查会员',
            ModelID: 90000012,
          },
          {
            ModelName: '手机号后4位查会员',
            ModelID: 90000013,
          },
          {
            ModelName: '手动输入会员号码',
            ModelID: 90000002,
          },
          {
            ModelName: '修改登录密码',
            ModelID: 90000003,
          },
          {
            ModelName: '首页-显示',
            ModelID: 90000005,
          },
          {
            ModelName: '手机报表',
            ModelID: 90000006,
          },
          {
            ModelName: '选择登录账期',
            ModelID: 90000007,
          },
          {
            ModelName: 'M42登录',
            ModelID: 90000008,
          },
        ],
      },
    ],
  },
  {
    Id: getUUID(),
    GroupName: '通用权限89',
    GroupMenus: [
      {
        Id: getUUID(),
        ClsName: '终端管理',
        Menus: [
          {
            ModelName: '查询',
            ModelID: getUUID(),
          },
          {
            ModelName: '保存',
            ModelID: getUUID(),
          },
          {
            ModelName: '删除',
            ModelID: getUUID(),
          },
        ],
      },
      {
        Id: getUUID(),
        ClsName: '手机报表设置',
        Menus: [
          {
            ModelName: '查询',
            ModelID: 1010094701,
          },
        ],
      },
      {
        Id: getUUID(),
        ClsName: '手机报表绑定',
        Menus: [
          {
            ModelName: '查询',
            ModelID: getUUID(),
          },
          {
            ModelName: '绑定微信',
            ModelID: getUUID(),
          },
          {
            ModelName: '删除',
            ModelID: getUUID(),
          },
        ],
      },
      {
        Id: getUUID(),
        ClsName: '系统设置',
        Menus: [
          {
            ModelName: '查询',
            ModelID: 100000901,
          },
        ],
      },
      {
        Id: getUUID(),
        ClsName: '通用权限',
        Menus: [
          {
            ModelName: '绑定终端',
            ModelID: 90000001,
          },
          {
            ModelName: '查看会员完整手机号',
            ModelID: 90000011,
          },
          {
            ModelName: '卡号后4位以上查会员',
            ModelID: 90000012,
          },
          {
            ModelName: '手机号后4位查会员',
            ModelID: 90000013,
          },
          {
            ModelName: '手动输入会员号码',
            ModelID: 90000002,
          },
          {
            ModelName: '修改登录密码',
            ModelID: 90000003,
          },
          {
            ModelName: '首页-显示',
            ModelID: 90000005,
          },
          {
            ModelName: '手机报表',
            ModelID: 90000006,
          },
          {
            ModelName: '选择登录账期',
            ModelID: 90000007,
          },
          {
            ModelName: 'M42登录',
            ModelID: 90000008,
          },
        ],
      },
    ],
  },
  {
    Id: '9774fbaf-4356-4875-af9a-83042e5395d1',
    GroupName: '通用权限4',
    GroupMenus: [
      {
        Id: 'ae2675af-e443-4d19-9963-b3daeb6ebb33',
        ClsName: '通用权限',
        Menus: [
          {
            ModelName: '绑定终端',
            ModelID: 90000001,
          },
          {
            ModelName: '查看会员完整手机号',
            ModelID: 90000011,
          },
          {
            ModelName: '卡号后4位以上查会员',
            ModelID: 90000012,
          },
          {
            ModelName: '手机号后4位查会员',
            ModelID: 90000013,
          },
          {
            ModelName: '手动输入会员号码',
            ModelID: 90000002,
          },
          {
            ModelName: '修改登录密码',
            ModelID: 90000003,
          },
          {
            ModelName: '首页-显示',
            ModelID: 90000005,
          },
          {
            ModelName: '手机报表',
            ModelID: 90000006,
          },
          {
            ModelName: '选择登录账期',
            ModelID: 90000007,
          },
          {
            ModelName: 'M42登录',
            ModelID: 90000008,
          },
        ],
      },
    ],
  },*/
  {
    Id: getUUID(),
    GroupNa: "通用权限0",
    GroupMen: [
      {
        Id: getUUID(),
        GroupNam: "通用权限9",
        GroupMenu: [
          {
            Id: getUUID(),
            GroupName: "通用权限88",
            GroupMenus: [
              {
                Id: getUUID(),
                ClsName: "终端管理",
                Menus: [
                  {
                    ModelName: "查询",
                    ModelID: getUUID(),
                  },
                  {
                    ModelName: "保存",
                    ModelID: getUUID(),
                  },
                  {
                    ModelName: "删除",
                    ModelID: getUUID(),
                  },
                ],
              },
              {
                Id: getUUID(),
                ClsName: "手机报表设置",
                Menus: [
                  {
                    ModelName: "查询",
                    ModelID: 1010094701,
                  },
                ],
              },
              {
                Id: getUUID(),
                ClsName: "手机报表绑定",
                Menus: [
                  {
                    ModelName: "查询",
                    ModelID: getUUID(),
                  },
                  {
                    ModelName: "绑定微信",
                    ModelID: getUUID(),
                  },
                  {
                    ModelName: "删除",
                    ModelID: getUUID(),
                  },
                ],
              },
              {
                Id: getUUID(),
                ClsName: "系统设置",
                Menus: [
                  {
                    ModelName: "查询",
                    ModelID: 100000901,
                  },
                ],
              },
              {
                Id: getUUID(),
                ClsName: "通用权限",
                Menus: [
                  {
                    ModelName: "绑定终端",
                    ModelID: 90000001,
                  },
                  {
                    ModelName: "查看会员完整手机号",
                    ModelID: 90000011,
                  },
                  {
                    ModelName: "卡号后4位以上查会员",
                    ModelID: 90000012,
                  },
                  {
                    ModelName: "手机号后4位查会员",
                    ModelID: 90000013,
                  },
                  {
                    ModelName: "手动输入会员号码",
                    ModelID: 90000002,
                  },
                  {
                    ModelName: "修改登录密码",
                    ModelID: 90000003,
                  },
                  {
                    ModelName: "首页-显示",
                    ModelID: 90000005,
                  },
                  {
                    ModelName: "手机报表",
                    ModelID: 90000006,
                  },
                  {
                    ModelName: "选择登录账期",
                    ModelID: 90000007,
                  },
                  {
                    ModelName: "M42登录",
                    ModelID: 90000008,
                  },
                ],
              },
            ],
          },
          {
            Id: getUUID(),
            GroupName: "通用权限5",
            GroupMenus: [
              {
                Id: getUUID(),
                ClsName: "终端管理",
                Menus: [
                  {
                    ModelName: "查询",
                    ModelID: getUUID(),
                  },
                  {
                    ModelName: "保存",
                    ModelID: getUUID(),
                  },
                  {
                    ModelName: "删除",
                    ModelID: getUUID(),
                  },
                ],
              },
              {
                Id: getUUID(),
                ClsName: "手机报表设置",
                Menus: [
                  {
                    ModelName: "查询",
                    ModelID: 1010094701,
                  },
                ],
              },
              {
                Id: getUUID(),
                ClsName: "手机报表绑定",
                Menus: [
                  {
                    ModelName: "查询",
                    ModelID: getUUID(),
                  },
                  {
                    ModelName: "绑定微信",
                    ModelID: getUUID(),
                  },
                  {
                    ModelName: "删除",
                    ModelID: getUUID(),
                  },
                ],
              },
              {
                Id: getUUID(),
                ClsName: "系统设置",
                Menus: [
                  {
                    ModelName: "查询",
                    ModelID: 100000901,
                  },
                ],
              },
              {
                Id: getUUID(),
                ClsName: "通用权限",
                Menus: [
                  {
                    ModelName: "绑定终端",
                    ModelID: 90000001,
                  },
                  {
                    ModelName: "查看会员完整手机号",
                    ModelID: 90000011,
                  },
                  {
                    ModelName: "卡号后4位以上查会员",
                    ModelID: 90000012,
                  },
                  {
                    ModelName: "手机号后4位查会员",
                    ModelID: 90000013,
                  },
                  {
                    ModelName: "手动输入会员号码",
                    ModelID: 90000002,
                  },
                  {
                    ModelName: "修改登录密码",
                    ModelID: 90000003,
                  },
                  {
                    ModelName: "首页-显示",
                    ModelID: 90000005,
                  },
                  {
                    ModelName: "手机报表",
                    ModelID: 90000006,
                  },
                  {
                    ModelName: "选择登录账期",
                    ModelID: 90000007,
                  },
                  {
                    ModelName: "M42登录",
                    ModelID: 90000008,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        Id: getUUID(),
        GroupNam: "通用权限9",
        GroupMenu: [
          {
            Id: getUUID(),
            GroupName: "通用权限88",
            GroupMenus: [
              {
                Id: getUUID(),
                ClsName: "终端管理",
                Menus: [
                  {
                    ModelName: "查询",
                    ModelID: getUUID(),
                  },
                  {
                    ModelName: "保存",
                    ModelID: getUUID(),
                  },
                  {
                    ModelName: "删除",
                    ModelID: getUUID(),
                  },
                ],
              },
              {
                Id: getUUID(),
                ClsName: "手机报表设置",
                Menus: [
                  {
                    ModelName: "查询",
                    ModelID: 1010094701,
                  },
                ],
              },
              {
                Id: getUUID(),
                ClsName: "手机报表绑定",
                Menus: [
                  {
                    ModelName: "查询",
                    ModelID: getUUID(),
                  },
                  {
                    ModelName: "绑定微信",
                    ModelID: getUUID(),
                  },
                  {
                    ModelName: "删除",
                    ModelID: getUUID(),
                  },
                ],
              },
              {
                Id: getUUID(),
                ClsName: "系统设置",
                Menus: [
                  {
                    ModelName: "查询",
                    ModelID: 100000901,
                  },
                ],
              },
              {
                Id: getUUID(),
                ClsName: "通用权限",
                Menus: [
                  {
                    ModelName: "绑定终端",
                    ModelID: 90000001,
                  },
                  {
                    ModelName: "查看会员完整手机号",
                    ModelID: 90000011,
                  },
                  {
                    ModelName: "卡号后4位以上查会员",
                    ModelID: 90000012,
                  },
                  {
                    ModelName: "手机号后4位查会员",
                    ModelID: 90000013,
                  },
                  {
                    ModelName: "手动输入会员号码",
                    ModelID: 90000002,
                  },
                  {
                    ModelName: "修改登录密码",
                    ModelID: 90000003,
                  },
                  {
                    ModelName: "首页-显示",
                    ModelID: 90000005,
                  },
                  {
                    ModelName: "手机报表",
                    ModelID: 90000006,
                  },
                  {
                    ModelName: "选择登录账期",
                    ModelID: 90000007,
                  },
                  {
                    ModelName: "M42登录",
                    ModelID: 90000008,
                  },
                ],
              },
            ],
          },
          {
            Id: getUUID(),
            GroupName: "通用权限5",
            GroupMenus: [
              {
                Id: getUUID(),
                ClsName: "终端管理",
                Menus: [
                  {
                    ModelName: "查询",
                    ModelID: getUUID(),
                  },
                  {
                    ModelName: "保存",
                    ModelID: getUUID(),
                  },
                  {
                    ModelName: "删除",
                    ModelID: getUUID(),
                  },
                ],
              },
              {
                Id: getUUID(),
                ClsName: "手机报表设置",
                Menus: [
                  {
                    ModelName: "查询",
                    ModelID: 1010094701,
                  },
                ],
              },
              {
                Id: getUUID(),
                ClsName: "手机报表绑定",
                Menus: [
                  {
                    ModelName: "查询",
                    ModelID: getUUID(),
                  },
                  {
                    ModelName: "绑定微信",
                    ModelID: getUUID(),
                  },
                  {
                    ModelName: "删除",
                    ModelID: getUUID(),
                  },
                ],
              },
              {
                Id: getUUID(),
                ClsName: "系统设置",
                Menus: [
                  {
                    ModelName: "查询",
                    ModelID: 100000901,
                  },
                ],
              },
              {
                Id: getUUID(),
                ClsName: "通用权限",
                Menus: [
                  {
                    ModelName: "绑定终端",
                    ModelID: 90000001,
                  },
                  {
                    ModelName: "查看会员完整手机号",
                    ModelID: 90000011,
                  },
                  {
                    ModelName: "卡号后4位以上查会员",
                    ModelID: 90000012,
                  },
                  {
                    ModelName: "手机号后4位查会员",
                    ModelID: 90000013,
                  },
                  {
                    ModelName: "手动输入会员号码",
                    ModelID: 90000002,
                  },
                  {
                    ModelName: "修改登录密码",
                    ModelID: 90000003,
                  },
                  {
                    ModelName: "首页-显示",
                    ModelID: 90000005,
                  },
                  {
                    ModelName: "手机报表",
                    ModelID: 90000006,
                  },
                  {
                    ModelName: "选择登录账期",
                    ModelID: 90000007,
                  },
                  {
                    ModelName: "M42登录",
                    ModelID: 90000008,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
