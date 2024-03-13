type ClubInfo = {
    id: number;
    name: string;
    logo: string;
    shortdesc: string;
    longdesc: string;
    department: string;
    field: string;
    link: {
        label: string;
        url: string;
    } [];
    joinlink: string;
    awards: {
        year: string;
        content: string[];
    } [];
    gallery: {
        thumbnail?: string;
        url: string;
        isVideo: boolean;
    }[];
};

export type ClubList = ClubInfo[];

const clubInfo: ClubInfo[] = [
    {
        id: 1,
        name: "TATE",
        logo: "Tate",
        shortdesc: "디자인 연구 동아리",
        longdesc: "TATE는 개척정신을 바탕으로 한 선구자 집단입니다\n" +
        "뛰어난 능력은 타고난 것 뿐 아니라 만들어가는 것이라 믿으며\n" +
        "함께하고자 하는 사람들과 진정한 목표를 탐색하고 과감하게 달려갑니다.\n",
        department: "콘텐츠디자인과",
        field: "디자인 연구",
        link: [
            {
                label: "Facebook",
                url: "https://www.facebook.com/TATEDesignResearchClub",
            },
            {
                label: "Instagram",
                url: "https://www.instagram.com/tate__official/",
            },
        ],
        joinlink: "https://forms.gle/VZkxrCJmLsTXZgur9",
        awards: [
            {
                year: "2021",
                content: [
                    "그래픽디자인 공모전 포스터 부문 금상",
                    "그래픽디자인 공모전 포스터 부문 은상",
                    "그래픽디자인 공모전 포스터 부문 동상",
                    "디지털 콘텐츠 개발 대회 앱 부문 대상",
                    "선린 헤커톤 게임 부문 동상",
                    "축제 포스터 공모전 동상",
                    "선린 영상 공모전 영화 부문 금상",
                    "선린 영상 공모전 광고 부문 금상",
                    "블로그 공모전 은상",
                ]
            },
            {
                year: "2022",
                content: [
                    "그래픽디자인 공모전 포스터 부문 금상",
                    "선린 영상 공모전 영화 부문 금상",
                    "선린 영상 공모전 광고 영화 부문 대상",
                ]
            },
        ],
        gallery: [
            {
                thumbnail: "https://i.ytimg.com/vi/KsOK53bQsHU/maxresdefault.jpg",
                url: "https://www.youtube.com/embed/KsOK53bQsHU?si=I6mh1FK9wFA8Gh5I",
                isVideo: true,
            },
            {
                url: "1",
                isVideo: false,
            },
            {
                url: "2",
                isVideo: false,
            },
            {
                url: "3",
                isVideo: false,
            },
            {
                url: "4",
                isVideo: false,
            },
            {
                url: "5",
                isVideo: false,
            },
            {
                url: "6",
                isVideo: false,
            },
            {
                url: "7",
                isVideo: false,
            },
            {
                url: "8",
                isVideo: false,
            },
            {
                url: "9",
                isVideo: false,
            },
            {
                url: "10",
                isVideo: false,
            },
            {
                url: "11",
                isVideo: false,
            },
            {
                url: "12",
                isVideo: false,
            },
            {
                url: "13",
                isVideo: false,
            },
            {
                url: "14",
                isVideo: false,
            },
            {
                url: "15",
                isVideo: false,
            },
            {
                url: "16",
                isVideo: false,
            },
            {
                url: "17",
                isVideo: false,
            },
            {
                url: "18",
                isVideo: false,
            },
            {
                url: "19",
                isVideo: false,
            },
            {
                url: "20",
                isVideo: false,
            },
            {
                url: "21",
                isVideo: false,
            },
            {
                url: "22",
                isVideo: false,
            },
            {
                url: "23",
                isVideo: false,
            },
            {
                url: "24",
                isVideo: false,
            },
            {
                url: "25",
                isVideo: false,
            },
            {
                url: "26",
                isVideo: false,
            },
            {
                url: "27",
                isVideo: false,
            },
            {
                url: "28",
                isVideo: false,
            },
        ]
    },
    {
        id: 2,
        name: "MIR",
        logo: "Mir",
        shortdesc: "만화·일러스트레이션 동아리",
        longdesc: "MIR는 만화 일러스트 전공 동아리로, 클립스튜디오와 포토샵을\n" +
        "이용한 수업을 제공합니다. 적극적인 지원을 통해 아직 디지털\n" +
        "드로잉에 익숙하지 않은 학생들도 드로잉에 익숙해질 수 있도록\n" +
        "돕습니다. 선배와 후배가 짝을 이루는 직계 시스템을 통해 개인\n" +
        "적인 지식 습득을 지원합니다.",
        department: "콘텐츠디자인과",
        field: "만화·일러스트레이션",
        link: [
            {
                label: "Facebook",
                url: "https://www.facebook.com/people/%EB%AF%B8%EB%A5%B4-MIR/100066338873711/?mibextid=ZbWKwL",
            },
            {
                label: "Instagram",
                url: "https://www.instagram.com/mir.__.official",
            },
            {
                label: "웹사이트",
                url: "https://sunrinmir.github.io/",
            }            
        ],
        joinlink: "https://docs.google.com/forms/d/e/1FAIpQLSfoJhtJj_9PDx4MhVQ0-h0WCOGJqWv5NMYnCbw6-jZ_YskFDA/viewform",
        awards: [
            {
                year: "2022",
                content: [
                    "선린 교내 그래픽공모전 대상 유호빈",
                    "대한민국 청소년 디자인 전람회 특선 김한비",
                ]
            },{
                year: "2023",
                content: [
                    "선린 교내 그래픽공모전 일러스트 부문 동상 윤지연",
                    "선린 교내 캐릭터공모전 은상 정선재",
                    "선린 교내 캐릭터공모전 은상 박민성",
                    "선린 교내 캐릭터공모전 동상 김한비",
                    "선린 교내 캐릭터공모전 동상 김해윤",
                ]
            },
        ],
        gallery: [
            {
                url: "1",
                isVideo: false,
            },{
                url: "2",
                isVideo: false,
            },{
                url: "3",
                isVideo: false,
            },{
                url: "4",
                isVideo: false,
            },{
                url: "5",
                isVideo: false,
            },{
                url: "6",
                isVideo: false,
            },{
                url: "7",
                isVideo: false,
            },{
                url: "8",
                isVideo: false,
            },{
                url: "9",
                isVideo: false,
            },{
                url: "10",
                isVideo: false,
            },{
                url: "11",
                isVideo: false,
            },{
                url: "12",
                isVideo: false,
            },
        ]
    },
    {
        id: 3,
        name: "아우내",
        logo: "Aune",
        shortdesc: "영상·영화 전공 동아리",
        longdesc: "아우내는 실사 영화 제작 동아리로 영화 기획,\n"+
        "영화 촬영 영화 편집 등 영화의 전번적인\n"+
        "제작 과정에 대해 탐구하고 부원이 직접 참여한\n"+
        "영화를 제작, 상영하여 미래의 영화 산업 선구자를\n"+
        "양성하는 동아리 입니다.",
        department: "콘텐츠디자인과",
        field: "영상·영화",
        link: [
            {
                label: "Facebook",
                url: "https://www.facebook.com/LiveActionFilmSociety",
            },
            {
                label: "Instagram",
                url: "https://www.instagram.com/aun0fficial/",
            }     
        ],
        joinlink: "https://forms.gle/sgFspMmEanyAkMa17",
        awards: [
            {
                year: "2020",
                content: [
                    "영상공모전 단편영화 부문 금상",
                ]
            },{
                year: "2021",
                content: [
                    "영상공모전 단편영화 부문 대상",
                    "영상공모전 광고 부문 은상",
                ]
            },{
                year: "2022",
                content: [
                    "영상공모전 단편영화 부문 은상",
                ]
            },{
                year: "2023",
                content: [
                    "영상공모전 단편영화 부문 금상",
                ]
            },
        ],
        gallery: [
        ]
    },
    {
        id: 4,
        name: "v.friends",
        logo: "Vfriends",
        shortdesc: "디자인 교육 봉사 동아리",
        longdesc: "브이프렌즈는 선린인터넷고등학교의 유일한\n"+
        "디자인 교육봉사 동아리로, 그래픽 디자인, UI/UX,\n"+
        "모션 그래픽, 영상 기획 등 다양한 분야를 배우고\n"+
        "여러 프로젝트를 수행하며 실력과 아이디어를 발휘\n" +
        "할 수 있는 동아리입니다. 브이프렌즈는 체계적인\n" +
        "교육과 선후배 간의 교류를 통해 부원들의 성장과\n" +
        "발전을 지원하고, 부원들 사이의 화목하고 즐거운\n" +
        "분위기가 자랑입니다. 또한, 교내 / 교외에서 진행\n" +
        "되는 디자인 교육 봉사 프로그램에 참여하여,\n" +
        "지식과 기술을 나누고 학생들의 창의 적인 사고와\n" + 
        "디자인 능력을 향상시키는 데 기여 하고 있습니다.",
        department: "콘텐츠디자인과",
        field: "그래픽 디자이너",
        link: [
            {
                label: "Facebook",
                url: "https://www.facebook.com/with.v.friends",
            },
            {
                label: "Instagram",
                url: "https://www.instagram.com/v.friends_official/",
            },     
            {
                label: "웹사이트",
                url: "https://vfriends.github.io/",
            }     
        ],
        joinlink: "https://docs.google.com/forms/d/e/1FAIpQLSdpLJQxhZLnpuJQOrwhbaAU5SDDPMx3SzJ15GskYwXMwcJ7xQ/viewform?pli=1",
        awards: [
            {
                year: "2023",
                content: [
                    "숙명여자대학교 AI - X\nSuper Hackathon Challenge\n최우수상",
                    "서울특별시 시민상 (모범 청소년상)\n창의과학예술 부문 우수상",
					"부산국제디자인어워드 동상",
					"전국 상업경진대회 서울지역\n대회홍보크리에이터 부문 금상",
					"선린 해커톤 생활 부문 금상",
					"부산국제마케팅광고제\n크리에이티브 캠프 최우수상",
					"서울시 직업계고\n창의아이디어경진대회 동상",
					"선린인터넷고등학교\n그래픽공모전 캐릭터 부문 금상",
					"대한민국 청소년 디자인 전람회 특선",
					"대한민국 청소년 디자인 전람회 입선",
					"레보리아 홍보 콘텐츠 공모전 우수상",
					"선린인터넷고등학교\n그래픽공모전 포스터 부문 대상",
					"선린인터넷고등학교\n그래픽공모전 포스터 부문 동상",
                ]
            },
			{
                year: "2022",
                content: [
                    "선린인터넷고등학교 영상공모전\n모션그래픽 부문 대상",
                    "선린인터넷고등학교 그래픽공모전\n캐릭터 부문 금상",
                    "선린인터넷고등학교 영상공모전\n광고 부문 금상",
                ]
            },
			{
                year: "2021",
                content: [
                    "국민의힘 X 여의도연구원\n공정한 대한민국 만들기 정책공모전 대상",
                    "동그라미재단과 함께하는 TIDE \n인스티튜드 Teu Med 4기 최우수상 ",
                ]
            },
			{
                year: "2020",
                content: [
                    "한국공항공사 창업경진대회 우수상",
                    "선린인터넷고등학교\n그래픽디자인 공모전 모션그래픽 부문 대상",
                    "선린인터넷고등학교\n그래픽디자인 공모전 포스터 부문 대상",
                    "선린인터넷고등학교\n그래픽디자인 공모전 UI/UX 부문 대상",
                ]
            },
        ],
        gallery: [
            {
                thumbnail: "https://i.ytimg.com/vi/RRd_AQOsgp0/maxresdefault.jpg",
                url: "https://www.youtube.com/embed/RRd_AQOsgp0?si=WM1D50LAYu3cggyM",
                isVideo: true,
            },
            {
                thumbnail: "https://i.ytimg.com/vi/4B-haYHCwOE/maxresdefault.jpg",
                url: "https://www.youtube.com/embed/4B-haYHCwOE?si=Voo5aDEm4vbdJ4qF",
                isVideo: true,
            },
            {
                url: "1",
                isVideo: false,
            },{
                url: "2",
                isVideo: false,
            },{
                url: "3",
                isVideo: false,
            },{
                url: "4",
                isVideo: false,
            },{
                url: "5",
                isVideo: false,
            },{
                url: "6",
                isVideo: false,
            },{
                url: "7",
                isVideo: false,
            },{
                url: "8",
                isVideo: false,
            },{
                url: "9",
                isVideo: false,
            },{
                url: "10",
                isVideo: false,
            },{
                url: "11",
                isVideo: false,
            },{
                url: "12",
                isVideo: false,
            },
            {
                url: "13",
                isVideo: false,
            },
            {
                url: "14",
                isVideo: false,
            },
            {
                url: "15",
                isVideo: false,
            },
            {
                url: "16",
                isVideo: false,
            },
            {
                url: "17",
                isVideo: false,
            },
            {
                url: "18",
                isVideo: false,
            },
            {
                url: "19",
                isVideo: false,
            },
            {
                url: "20",
                isVideo: false,
            },
            {
                url: "21",
                isVideo: false,
            },
            {
                url: "22",
                isVideo: false,
            },
            {
                url: "23",
                isVideo: false,
            },
            {
                url: "24",
                isVideo: false,
            },
            {
                url: "25",
                isVideo: false,
            },
            {
                url: "26",
                isVideo: false,
            },
            {
                url: "27",
                isVideo: false,
            },
            {
                url: "28",
                isVideo: false,
            },{
                url: "29",
                isVideo: false,
            },{
                url: "30",
                isVideo: false,
            },{
                url: "31",
                isVideo: false,
            },{
                url: "32",
                isVideo: false,
            },{
                url: "33",
                isVideo: false,
            },{
                url: "34",
                isVideo: false,
            },{
                url: "35",
                isVideo: false,
            },{
                url: "36",
                isVideo: false,
            },{
                url: "37",
                isVideo: false,
            },{
                url: "38",
                isVideo: false,
            },{
                url: "39",
                isVideo: false,
            },{
                url: "40",
                isVideo: false,
            },{
                url: "41",
                isVideo: false,
            },{
                url: "42",
                isVideo: false,
            },{
                url: "43",
                isVideo: false,
            },{
                url: "44",
                isVideo: false,
            },
        ]
    },
    {
        id: 5,
        name: "C,real",
        logo: "Creal",
        shortdesc: "게임 개발 연구 동아리",
        longdesc: "상상을 게임이라는 도구로 실현하는 동아리로 게임 제작뿐만\n"+
        "아닌 게임디자인도 체계적으로 배울 수 있으며 부원들끼리의\n"+
        "협업을 지양하는 동아리입니다.\n",
        department: "소프트웨어과",
        field: "게임 디자인",
        link: [
            {
                label: "Instagram",
                url: "https://www.instagram.com/c.real._/",
            },     
            {
                label: "웹사이트",
                url: "https://creal.kro.kr/",
            },     
        ],
        joinlink: "https://docs.google.com/forms/d/e/1FAIpQLSf9vduaZvxAKPNjT8f5s2S5BMQdqNGMwqqrS5TTjEGuZYWfUQ/viewform",
        awards: [
            {
                year: "2023",
                content: [
                    "제 9회 헤커톤 - 금상",
                    "제 9회 해커톤 - 대상",
                    "제 4회 직업계고 IT분야\n취업 UP 게임 개발 대회 - 장려상",
                    "전국 청강 게임 대전 - 장려상",
                    "선린 천하제일 코딩대회 - 대상",
                    "선린 천하제일 코딩대회 - 은상",
                    "한국정보올림피아드 1차 대회 일반고부문 은상\n전체응시자부문 동상",
                    "한국정보올림피아드 2차 대회 동상",
					"NYPC 1519 부문 본선 진출",
					"디콘 동상",
					"디콘 은상",
					"디콘 금상",
                ]
            },{
                year: "2022",
                content: [
                    "한국코드페어 고등부\nsw공모전 본선 16등",
                    "IT분야 직업계고\n게임개발대회 장려상",
                    "해커톤 동상",
                    "그래픽 공모전 캐릭터 부문 금상",
                    "그래픽 공모전 일러스트레이션 부문 금상",
                ]
            },
        ],
        gallery: [
            {
                url: "1",
                isVideo: false,
            },{
                url: "2",
                isVideo: false,
            },{
                url: "3",
                isVideo: false,
            },{
                url: "4",
                isVideo: false,
            },{
                url: "5",
                isVideo: false,
            },{
                url: "6",
                isVideo: false,
            },{
                url: "7",
                isVideo: false,
            },{
                url: "8",
                isVideo: false,
            },{
                url: "9",
                isVideo: false,
            },{
                url: "10",
                isVideo: false,
            },{
                url: "11",
                isVideo: false,
            },{
                url: "12",
                isVideo: false,
            },
            {
                url: "13",
                isVideo: false,
            },
            {
                url: "14",
                isVideo: false,
            },
            {
                url: "15",
                isVideo: false,
            },
            {
                url: "16",
                isVideo: false,
            },
        ]
    },
    {
        id: 6,
        name: "TAPIE",
        logo: "Tapie",
        shortdesc: "앱·웹 개발 연구 동아리",
        longdesc: "TAPIE (이하 “테이피”) 는 2024년 새로 세워진\n"+
        "선린인터넷고등학교 소프트웨어과 소속\n"+
        "웹, 앱 개발 전공 동아리입니다. 세상에 존재하는\n"+ 
        "다양한 간극을 소프트웨어로 이어붙이자는\n"+
        "신념 아래, 우리들의 전공을 활용하여 세상의 간극들을\n"+ 
        "좁혀 나가고자 오늘도 노력하고 있습니다.\n",
        department: "소프트웨어과",
        field: "앱·웹 UI 디자인",
        link: [
            {
                label: "Instagram",
                url: "https://www.instagram.com/sunrin_tapie/",
            },     
            {
                label: "웹사이트",
                url: "https://tapie.kr/",
            },     
        ],
        joinlink: "https://tapie.kr/",
        awards: [
            {
                year: "2020",
                content: [
                    "디지털 콘텐츠 개발대회 앱 부문 금상",
                    "선린 해커톤 생활분야 금상",
                    "모바일 콘텐츠 개발대회 게임 에셋 부문 대상",
                    "모바일 콘텐츠 개발대회 생활 디자인 부문 대상",
                    "모바일 콘텐츠 개발대회 생활 비디자인 부문 대상",
                    "창업동아리 우수사례 나눔전 금상",
                    "KBSC 특별상",
                    "STA-C 가작",
                    "KAC 고등창업 우수상"
                ]
            },{
                year: "2021",
                content: [
                    "디지털 콘텐츠 개발대회 앱 부문 대상",
                    "선린 해커톤 생활분야 은상",
                    "선린 해커톤 생활분야 동상",
                    "모바일 콘텐츠 개발대회 생활 디자인 부문 금상",
                    "모바일 콘텐츠 개발대회 생활 디자인 부문 은상",
                    "모바일 콘텐츠 개발대회 생활 디자인 부문 동상",
                    "모바일 콘텐츠 개발대회 생활 디자인 부문 동상",
                    "모바일 콘텐츠 개발대회 생활 비디자인 부문 동상",
                    "창업상경진대회 장려상"
                ]
            },{
                year: "2022",
                content: [
                    "교내 그래픽 공모전 UIUX 동상",
                    "교내 디지털콘텐츠개발대회 웹 분야 은상",
                    "디지털콘텐츠개발대회 동상",
                    "천코대 금상",
                    "교내 해커톤 금상",
                    "교내 해커톤 은상",
                    "2022 Junior 창업아이템 경진대회 중소벤처기업청장상", 
                    "국제정보올림피아드 금상",
                    "마이다스아이티 해커톤 은상",
                    "앱잼 장려상",
                    "임베디드 SW 경진대회 우수상",
                    "2022 한국올림피아드 은상",
                    "2022 콘텐츠디자인과 영상 공모전 모션그래픽 부문 금상",
                ]
            },{
                year: "2023",
                content: [
                    "Highthon 우수상",
                    "숙명여자대학교 AI-X Challenge 최우수상",
                    "부산국제디자인어워드 동상",
                    "부산국제마케팅광고제 크리에이티브 캠프 최우수상",
                    "직업계고 창의아이디어경진대회 동상",
                    "Smarteen App Challenge 입선",
                    "교내 디지털콘텐츠개발대회 생활 부문 대상", 
                    "교내 디지털콘텐츠개발대회 게임 부문 동상",
                    "NYPC 우승",
                    "대한민국 인재상",
                    "AI-X Super Hackathon challenge 최우수상",
                ]
            },{
                year: "2024",
                content: [
                    "9th Highthon 마루상(1등)",
                    "앱잼 생활 및 미래산업 부문 최우수상",
                ]
            },
        ],
        gallery: [
            {
            url: "1",
            isVideo: false,
        },{
            url: "2",
            isVideo: false,
        },{
            url: "3",
            isVideo: false,
        },{
            url: "4",
            isVideo: false,
        },{
            url: "5",
            isVideo: false,
        },{
            url: "6",
            isVideo: false,
        },{
            url: "7",
            isVideo: false,
        },{
            url: "8",
            isVideo: false,
        },{
            url: "9",
            isVideo: false,
        },{
            url: "10",
            isVideo: false,
        },{
            url: "11",
            isVideo: false,
        },
        ]
    },
    {
        id: 7,
        name: "자의누리",
        logo: "Januri",
        shortdesc: "모션 그래픽 전문 동아리",
        longdesc: "안녕하세요. 저희는 선린인터넷고등학교의 모션그래픽 제작 동아리 자의누리입니다!\n"+
        "저희는 주로 에프터 이펙트를 사용하며 키네틱 타이포, 모션그래픽 위주로 수업을 진행합니다.\n"+
        "학생들에게 맞는 수업을 진행하고 여러 프로젝트와 과제를 진행하며\n"+
        "전공 실력을 향상시킬 수 있게 도와줍니다.\n",
        department: "콘텐츠디자인과",
        field: "영상편집, 그래픽 디자인",
        link: [
            {
                label: "Facebook",
                url: "https://www.facebook.com/centerworld",
            },     
            {
                label: "Instagram",
                url: "https://www.instagram.com/junr_official/",
            },     
        ],
        joinlink: "https://docs.google.com/forms/d/e/1FAIpQLSe1kBCrbAvlnfBobCb0T_BmxD4Nsd1V5JN0lFrKiI-SG0V_QA/viewform",
        awards: [
            {
                year: "2023",
                content: [
                    "2023 교내영상공모전 금상",
                    "2023 전국상업경진대회 금상",
                    "2023 교내영상공모전 은상",
                    "2023 교내영상공모전 동상",
                    "2023 교내영상공모전 동상",
                    "대한민국 청소년 디자인 전람회 특선",
                    "대한민국 청소년 디자인 전람회 입선",
                    "레보리아 홍보 콘텐츠 공모전 우수상",
                ]
            },
            {
                year: "2022",
                content: [
                    "대한민국 청소년 디자인 전람회 특선",
                ]
            },
            {
                year: "2021",
                content: [
                    "선린인터넷고등학교 영상공모전 금상",
                    "선린인터넷고등학교 영상공모전 금상",
                ]
            },
        ],
        gallery: [
            {
                thumbnail: "https://i.ytimg.com/vi/2G0ujJBIUsk/maxresdefault.jpg",
                url: "https://www.youtube.com/embed/2G0ujJBIUsk?si=-ipKnKD-kO9_7myH",
                isVideo: true,
            },
            {
                thumbnail: "https://i.ytimg.com/vi/4CrrfwbqXvM/maxresdefault.jpg",
                url: "https://www.youtube.com/embed/4CrrfwbqXvM?si=pCTgYK0TLYszXF1A",
                isVideo: true,
            },
            {
                thumbnail: "https://i.ytimg.com/vi/h5BPbEakXrU/maxresdefault.jpg",
                url: "https://www.youtube.com/embed/h5BPbEakXrU?si=dYBBRb3IotaN4IuD",
                isVideo: true,
            },
            {
                thumbnail: "https://i.ytimg.com/vi/1NRe97TAlxw/maxresdefault.jpg",
                url: "https://www.youtube.com/embed/1NRe97TAlxw?si=2lT83K5qMdJv9GUH",
                isVideo: true,
            },
            {
                thumbnail: "https://i.ytimg.com/vi/397DuqeA6jE/maxresdefault.jpg",
                url: "https://www.youtube.com/embed/397DuqeA6jE?si=W9qm9vTOiDhYLs-W",
                isVideo: true,
            },
            {
                thumbnail: "https://i.ytimg.com/vi/AV1rfR7H224/maxresdefault.jpg",
                url: "https://www.youtube.com/embed/AV1rfR7H224?si=zuyIGSYY_B0g4hm4",
                isVideo: true,
            },
            {
                thumbnail: "https://i.ytimg.com/vi/ffLT-D6nK_U/maxresdefault.jpg",
                url: "https://www.youtube.com/embed/ffLT-D6nK_U?si=qrmI8_uLFETcKfTv",
                isVideo: true,
            },
            {
                thumbnail: "https://i.ytimg.com/vi/1dsvSxCj6-U/maxresdefault.jpg",
                url: "https://www.youtube.com/embed/1dsvSxCj6-U?si=vgLWXM_Cp67fYAxQ",
                isVideo: true,
            },
            {
                thumbnail: "https://i.ytimg.com/vi/YT_IHG2OhV8/maxresdefault.jpg",
                url: "https://www.youtube.com/embed/YT_IHG2OhV8?si=UVd5yHCbzNSHC5WL",
                isVideo: true,
            },
            {
                thumbnail: "https://i.ytimg.com/vi/_ZXAitR8gwY/maxresdefault.jpg",
                url: "https://www.youtube.com/embed/_ZXAitR8gwY?si=hAIjz628pML_EZBT",
                isVideo: true,
            },
            {
                thumbnail: "https://i.ytimg.com/vi/Ro-xE9J_osk/maxresdefault.jpg",
                url: "https://www.youtube.com/embed/Ro-xE9J_osk?si=58_bbJ07lDZOBjuc",
                isVideo: true,
            },
            {
                thumbnail: "https://i.ytimg.com/vi/Vl5Sr43wuS4/maxresdefault.jpg",
                url: "https://www.youtube.com/embed/Vl5Sr43wuS4?si=NE0kk5NxL3CpSubu",
                isVideo: true,
            },
            {
                thumbnail: "https://i.ytimg.com/vi/f8pZHfV22b0/maxresdefault.jpg",
                url: "https://www.youtube.com/embed/f8pZHfV22b0?si=0Xr9qrE7Wb3S-8dc",
                isVideo: true,
            },
            {
                thumbnail: "https://i.ytimg.com/vi/s_6JYCeIMCI/maxresdefault.jpg",
                url: "https://www.youtube.com/embed/s_6JYCeIMCI?si=kC8c90nKCVVkzEko",
                isVideo: true,
            },
        ]
    },
]


const clubList: ClubList = clubInfo;

export default clubList;