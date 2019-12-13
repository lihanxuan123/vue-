<template>
    <div class="situation">
      <!--简历第一张-->
        <el-card class="whole">

      <!--简历头部-->
            <div>
                <el-row>
                    <el-col :span="6">
                    <div class="titles">个人简历&nbsp;|</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="ps">细心每一个小细节开始。</div><div class="ps1">Personal resume</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="love">
                        <div class="mu mu1"><span style="padding-left: 12px">❤</span></div>
                        <div class="mu mu1"><span style="padding-left: 12px">❤</span></div>
                        <div class="mu mu1"><span style="padding-left: 12px">❤</span></div>
                        </div>
                    </el-col>
                </el-row>
                    <el-row>
                        <el-col :span="14">
                            <div class="strip"></div>
                        </el-col>
                        <el-col :span="10">
                            <div class="strip1"></div>
                        </el-col>
                    </el-row>
                    </div>
                    <!--基本信息-->
                    <div>
                        <el-row>
                            <el-col :span="5"> <div class="strip2">基本信息</div></el-col>
                        </el-row>
                        <div class="contents">
                        <div class="yang">
                            <el-row>
                                <el-col :span="10">姓<span class="leave"></span>名:{{Essential.name}}</el-col>
                                <el-col :span="10">姓<span class="leave"></span>别:{{Essential.sex}}</el-col>
                            </el-row>
                            <div  class="between"></div>
                            <el-row>
                                <el-col :span="10">民<span class="leave"></span>族:{{Essential.nation}}</el-col>
                                <el-col :span="10">籍<span class="leave"></span>贯:{{Essential.native}}</el-col>
                            </el-row>
                            <div  class="between"></div>
                            <el-row>
                                <el-col :span="10">电<span class="leave"></span>话:{{Essential.telephone}}</el-col>
                                <el-col :span="10">年<span class="leave"></span>零:{{Essential.age}}</el-col>
                            </el-row>
                            <div  class="between"></div>
                            <el-row>
                                <el-col :span="10">邮<span class="leave"></span>箱:{{Essential.mailbox}}</el-col>
                                <el-col :span="10">住<span class="leave"></span>址:{{Essential.address}}</el-col>
                            </el-row>
                      </div>
                    </div>
                    </div>

                    <!--求职意向-->
                    <div>
                        <el-row>
                            <el-col :span="5"> <div class="strip2">求职意向</div></el-col>
                        </el-row>
                        <div class="wantedy">
                            <div class="wantedcontenty">
                                <el-row>
                                    <el-col :span="10">求职地点:{{intention.place}}</el-col>
                                    <el-col :span="10">从事行业:{{intention.occupation}}</el-col>
                                </el-row>
                                <div class="between"></div>
                                <el-row>
                                    <el-col :span="10">工作性质:{{intention.nature}}</el-col>
                                    <el-col :span="10">从事行业:{{intention.industry}}</el-col>
                                </el-row>
                            </div>
                        </div>
                    </div>

                    <!--工作经历-->
                    <div>
                        <el-row>
                            <el-col :span="5"> <div class="strip2">工作经历</div></el-col>
                        </el-row>
                        <div class="worky">
                            <div class="workynext">
                               <div v-for="(score,index) in users">{{score}}</div>
                            </div>
                            </div>
                    </div>


                    <!--掌握技能-->
                    <div>
                        <el-row>
                            <el-col :span="5"> <div class="strip2">掌握技能</div></el-col>
                        </el-row>
                        <div class="skilly">
                            <div class="skillynext">
                                <ul>
                                    <li v-for="(scoer1,index) in skill">{{scoer1}}</li>
                                </ul>
                            </div>
                    </div>
                </div>

        </el-card>


        <div style="margin-top: 50px"></div>


        <!--简历第二张-->
        <el-card class="whole">
            <!--项目开发-->
            <div>
                <el-row>
                    <el-col :span="5"> <div class="strip2" >项目开发</div></el-col>
                </el-row>
                <div class="project">
                    <div class="projectnext">
                        <el-row>
                            <el-col :span="10"><b>(1)项目名称:</b>{{project1[0].enname}}</el-col>
                            <el-col :span="10"><b>项目职位:</b>{{project1[0].position}}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="10"><b>项目时间:</b>{{project1[0].time}}</el-col>
                            <el-col :span="10"><b>使用人员:</b>{{project1[0].personnel}}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="10"><b>开发工具:</b>{{project1[0].tool}}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24"><b>项目描述:</b>{{project1[0].describe}}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="10"><b>主要负责:</b>
                                <ol>
                                    <li v-for="(scoer2) in project1[0].responsible ">{{scoer2}}</li>
                                </ol>
                            </el-col>
                        </el-row>

                        <div style="margin-top: 50px"></div>
                        <el-row>
                            <el-col :span="10"><b>(2)项目名称:</b>{{project1[1].enname}}</el-col>
                            <el-col :span="10"><b>项目职位:</b>{{project1[1].position}}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="10"><b>项目时间:</b>{{project1[1].time}}</el-col>
                            <el-col :span="10"><b>使用人员:</b>{{project1[1].personnel}}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="10"><b>开发工具:</b>{{project1[1].tool}}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24"><b>项目描述:</b>{{project1[1].describe}}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="10"><b>主要负责:</b>
                                <ol>
                                    <li v-for="(scoer2) in project1[1].responsible ">{{scoer2}}</li>
                                </ol>
                            </el-col>
                        </el-row>

                        <div style="margin-top: 50px"></div>

                        <el-row>
                            <el-col :span="10"><b>(3)项目名称:</b>{{project1[2].enname}}</el-col>
                            <el-col :span="10"><b>项目职位:</b>{{project1[2].position}}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="10"><b>项目时间:</b>{{project1[2].time}}</el-col>
                            <el-col :span="10"><b>使用人员:</b>{{project1[2].personnel}}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="10"><b>开发工具:</b>{{project1[2].tool}}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24"><b>项目描述:</b>{{project1[2].describe}}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="10"><b>主要负责:</b>
                                <ol>
                                    <li v-for="(scoer2) in project1[2].responsible ">{{scoer2}}</li>
                                </ol>
                            </el-col>
                        </el-row>


                        <div style="margin-top: 50px"></div>
                    </div>
                </div>
            </div>



        </el-card>


        <div style="margin-top: 50px"></div>
        <!--简历第三张-->
        <el-card class="whole">
            <!--项目开发-->
            <div>
                <el-row>
                    <el-col :span="5"> <div class="strip2">项目开发</div></el-col>
                </el-row>
                <div class="project">
                    <div class="projectnext">
                        <el-row>
                            <el-col :span="10"><b>(1)项目名称:</b>{{project1[3].enname}}</el-col>
                            <el-col :span="10"><b>项目职位:</b>{{project1[3].position}}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="10"><b>项目时间:</b>{{project1[3].time}}</el-col>
                            <el-col :span="10"><b>使用人员:</b>{{project1[3].personnel}}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="10"><b>开发工具:</b>{{project1[3].tool}}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24"><b>项目描述:</b>{{project1[3].describe}}</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="10"><b>主要负责:</b>
                                <ol>
                                    <li v-for="(scoer2) in project1[3].responsible ">{{scoer2}}</li>
                                </ol>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>



        </el-card>
    </div>
</template>

<script>
    export default {
        name: "index",

        data(){  //数据区
            return{
            //    基本信息
                Essential:{
                    name:'李紫迎',
                    sex:'男',
                    nation:'汉族',
                    native:'河北-邯郸',
                    telephone:'19832113629',
                    age:'20',
                    mailbox:'2384422702@qq.com',
                    address:'河北省石家庄市桥西区瑞嘉花园'
                },
            //    工作经历
                users:[
                    "2019年8月至今河北辅良科技有限公司 web前台开发",
                    "2018年10月到2019年7月 河北千城电子科技有限公司 java后台开发"
                ],
            //    求职意向
                intention:{
                    place:'石家庄',
                    occupation:'web前端开发',
                    nature:'全职',
                    industry:'计算机软件'
                },

            //    掌握技能
                skill:[
                    "精通使用:div+css布局的html代码编写,熟练手写符合w3c标准代码,能够根据交互原型和UI设计图制作页面",
                    "熟练使用:JavaScript、css、和html5，并且熟练使用jquery框架实现页面的特效交互，掌握面向对象编程思想",
                    "熟练使用:dom、xml、json等相关技术",
                    "熟练使用:bootstrap、vue、iview、element ui、easyui等前台框架了解layui",
                    "熟练使用:Es6、ajax、axios等前台技术",
                    "熟悉掌握:Java编程语言，有良好的的编码习惯",
                    "熟练使用:spring、springMvc、mybatis 、springboot、springcloud等后台框架及整合",
                    "熟练微信公众号开发",
                    "熟练使用:mysql、oracle等关系型数据库、了解redis等非关系数据库",
                    "熟练使用:熟练使用:Linux常用命令了解docker容器技术",
                    "熟练掌握:mysql、oracle语句的应用及优化的运用",
                ],

                //项目经验
                project1:[
                    {
                        enname:'安吉星教务管理',
                        position:'web前台开发',
                        tool:'IntelliJ IDEA',
                        time:'2019-09至今',
                        personnel:'培训机构',
                        describe:'为学校做的教务管理，该系统分为教师端和学生端。' +
                            '板块:学术部门本模块是录入学生的所学的课程、和试题的录入。' +
                            '教职部门改模块是录入改学校的所有班级和全校学生的信息录入' +
                            '。学生专栏 老师点击开始考试学生线上考试，老师线上判题。',
                        responsible:[
                            "使用vue+iview完成页面的布局搭建，页面中使用vue展示数据及处理页面逻辑使用iview完成页面的搭建。",
                            "检测代码、测试兼容性",
                            "通过axios技术，实现与后台的数据交互。",
                            "及课程的录入、试题的录入和后台的接口开发"
                        ]
                    },
                    {
                        enname:'bos 速运',
                        position:'web前台开发',
                        tool:'HBuilder',
                        time:'2019-6-2019-8',
                        personnel:'物流企业',
                        describe:'河北石家庄bos 速运，是河北省石家庄市，使用受众是物流旗下员工，主要服务人群是大众，服'+
                            '务模式是通过网上申请或站点申请，提供物流服务。这个项目是一个以多平台服务的多平台项目，涉及了客户' +
                            '端，服务端等。大体分为速运快递（客户、快递员）的账户管理、在线下单、我的主页、快件管理查询服务.' +
                            '与后台管理的，分拣管理，基础数据、受理、调度、系统管理等',
                        responsible:[
                            "使用vue+element ui完成页面的布局搭建",
                            "通过axios技术，实现与后台的数据交互。",
                            "检测代码、测试兼容性、调试bug、",
                            "用mock模拟数据"
                        ]

                    },
                    {
                        enname:'云南省安全生产应急指挥系统',
                        position:'web前台开发',
                        tool:'HBuilder X',
                        time:'2019-7',
                        personnel:'监督管理局',
                        describe:'为云南省安全生产监督局做的安全生产应急指挥系统',
                        responsible:[
                            "测试页面部分功能 更改部分页面样式、调试bug",
                        ]

                    },
                    {
                        enname:'平安财产增值服务预约系统',
                        position:'Java软件工程师',
                        tool:'IntelliJ IDEA',
                        time:'2019.03-07',
                        personnel:' 95511客服人员',
                        describe:'是为平安财产95511客户服务中心做的一个系统。' +
                            '增值服务模块（1.车主秘书服务，2.新车牌照批改，3.酒后代驾服务，4.代检车服务等等）和 报表模块。本系统是一个多模块服务系统' +
                            '，涉及增值服务、岗位服务、资产服务等等。项目的服务人群是平安财产保险客户，通过线上预约，' +
                            '线下服务的方式；本系统是使用前后端完全分离，使用Ajax进行异步访问。',
                        responsible:[
                            "代检车服务、新车牌照批改的接口实现和维护",
                        ]

                    }


                ]
            }
        }
    }
</script>

<style scoped>


    .situation{
      background-image: url("../../assets/img/bz.jpg") ;
        margin: 0;
         padding: 0;
        -webkit-background-size: cover;
        -moz-background-size:cover ;
         -o-background-size: cover;
         background-size: cover;
       height: 100%;


    }
    .strip{
        height: 30px;
        margin-top: 20px;
        background:linear-gradient(-45deg,transparent 15px, forestgreen 0)bottom right;
    }

    .strip1{
        height: 20px;
        margin-top: 30px;
        background:linear-gradient(135deg,transparent 15px, #5d8b16 0)top left;
    }
    .strip2{
        margin-top: 25px;
        color: azure;
        height: 30px;
        background:linear-gradient(-45deg,transparent 15px, forestgreen 0)bottom left;
    }
    .whole{
        width: 1000px;
        height: 1180px;
        margin: auto;
    }

    .titles{
        color: forestgreen;
        font-size: 50px;
    }
    .ps{
        margin-top: 20px;

        color: forestgreen;
    }
    .ps1{

        color: forestgreen;
    }
    .mu{
        float:left;
        border-radius:50%;
        width: 40px;
        height: 40px;
        background-color: #4f8b27;
        color: azure;
    }
    .mu1{
        margin: 0px 10px 0px 0px
    }
    .love{
        margin-top: 20px;
    }

    .between{
        margin-top: 10px
    }
    .leave{
        margin-left: 10px
    }
    .contents{
        border: 1px solid forestgreen; width: 900px; height: 190px
    }
    .yang{
        margin-left: 10px;margin-top: 20px
    }
    .wantedy{
        border: 1px solid forestgreen;
        width: 900px;
        height: 130px;
    }

    .wantedcontenty{
        margin-left: 10px;
        margin-top: 20px
    }
    .worky{
        border: 1px solid forestgreen;
        width: 900px;
        height: 120px;
    }
    .workynext{
        margin-left: 10px;margin-top: 20px
    }

    .skilly{
        border: 1px solid forestgreen;
        width: 900px;
        height: 290px;
    }
    .skillynext{
        margin-left: 10px;
        margin-top: 20px
    }
    .project{
        border: 1px solid forestgreen;
        width: 900px;
        height: 1200px;
    }
    .projectnext{
        margin-left: 10px;
        margin-top: 20px;
        line-height: 30px;
    }

</style>