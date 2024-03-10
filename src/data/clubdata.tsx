type ClubInfo = {
    id: number;
    name: string;
    logo: string;
    shortdesc: string;
    longdesc: string;
    department: string;
    field: string;
    link: string[];
    joinlink: string;
    awards: {
        year: string;
        content: string[];
    } [];
    gallery: {
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
        field: "만화·일러스트레이션",
        link: [
            "https://www.facebook.com/TATEDesignResearchClub",
            "https://www.instagram.com/tate__official/"
        ],
        joinlink: "https://sunrinmir.github.io/",
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
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMTQ3/MDAxNzEwMDY3OTQwNjM0.6TR8y4kzO0K_FX-ihdxsh1Mcb9gHwavO8IoWNF5qBQIg.U0WiOx9RyXaFc2nxPyzFeHQEhvnm7rmasBOEPx-tqh4g.PNG/GENESIS_%ED%8F%AC%EC%8A%A4%ED%84%B0_01.png",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMjQw/MDAxNzEwMDY3OTU0OTg3.TWP0T7UbKXd3t5w9xtE_6kL_lm52sUmCe-VJtiP8Ojgg.7sgln_WKDZkvrvpEYAmmZdJ-BAeelEPP-EmXjjD4_WAg.JPEG/GENESIS_%ED%8F%AC%EC%8A%A4%ED%84%B0_03.jpg",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfNzAg/MDAxNzEwMDY4MjY0MDU5.tMTeqtSAkHHAHElLYPfHRO0RK2quXyWIBvPCYxhfc0Qg.VJnSHAFxAOvhhJdjp5-9wNCZx7wbnvnfQQJG-NweiWMg.JPEG/GNENSIS_%ED%8F%AC%EC%8A%A4%ED%84%B0_02.jpg",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMTQ4/MDAxNzEwMDY3OTI4Nzgw.fS03TpET5w_x1hSRPQs1M_zPLe5RplWSzbkDNF2ZGBAg.bxWgqTUCD8gx58tB70UMFNQmRhNylxH5Sbvv-HKuSOEg.JPEG/Happy_Date.jpg",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfODUg/MDAxNzEwMDY4MDMxMjk1.QDD_4GYxiovPj8ZRn8CBqSTF_vLjLaqMtnEuGZSqRv8g.5x1vrs8JL4MUzdfSNLPBCNI-bzOmNwIae9sPK1jc3jkg.JPEG/LOVE_BATTERY.jpg",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMjYz/MDAxNzEwMDY3OTI2NTMw.KvM80aRJ8RC9vS-V9PhETkYskXvFtDocBKcXSlkqhmgg.dSZkxt_H2ZkU4B1j-mUyT1NphbszBDPB2RiKsOUyRnAg.JPEG/LOVE_EXPIRY.JPG",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMjcw/MDAxNzEwMDY3OTMxNzg4.J6obQF8zSM9OAtd8Iy0EuiH_XrpsE-LuXdr1zx_NC28g.0hkqtZaCm7nbx4tWDc3UwDD22n44YW0gh1bSXoKSXGQg.JPEG/PeachyBomb_01.jpg",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMjg3/MDAxNzEwMDY3OTMxNTIz.ju65_PI_6I9n0gwHdQPtfXfr-rAnBpnWI1i488wodfAg.6leLN9MRpHFiYVqzrOf7DziKsInP4jcsa5K0kh7ZdY8g.JPEG/PeachyBomb_02.jpg",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMjE4/MDAxNzEwMDY3OTI2OTMz.1WXUpaD2CqmEnxXqMiEDDEx8ro2zia6TJSyP8zQTYxcg.HQECOpr3Ec8O_78UxPhElPQVXErxVBBIur40y9QkRl0g.JPEG/PeachyBomb_03.jpg",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMjMx/MDAxNzEwMDY3OTUwMDE5.nxt_aFKOI-OeqmEj0xGFAjsishsRaKeeOWPubyrwdhkg.qtvHTOajMLqGpQPtF5hWaxSNRhaPoCNYJBww1rwvlGMg.JPEG/REVEUSE.jpg",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMjg0/MDAxNzEwMDY3OTg5MzYx.NF5Zy-Qbs0oLWYl-m5L6DUCfv6QcojPfo4iTr2Ju3Kgg.xC7WP3nolo6P4ZUbfn1BXtkbu13-rgti0tJGr7I_r18g.PNG/somnium_%ED%8F%AC%EC%8A%A4%ED%84%B0.png",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMTc0/MDAxNzEwMDY3OTM1Mzkz.xAn60UBcXWptMJ3AcsT7ka2SPQMh23Hwdto_8es30AUg.d9Zrvvhc5JSjDWaldgGsvlXUyd6gLbMhPm6U1UCSuugg.JPEG/Take_it_medicine.jpg",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMTU0/MDAxNzEwMDY4MDI4MDQy.r0qRelzTiTUMK6vAS6dMwCF0yb9PhJJekBCWTuG1JnUg.b8zjxnFSyyUBL9-iPjWUH3MB-Yxj39PdofNk0Qer2uIg.JPEG/THE_INEVITABLE_DESTINY.jpg",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMjM5/MDAxNzEwMDY3OTU0Njkw.yqQVkR_nm2rX4Lr5hcR78NAzDoq5wovIytL6UCNUwKYg.JJ4Soi6HqQCNU3d2-bnMB-K4KucVa4uKeozQqpq7Z3og.PNG/THEIA_%EA%B0%90%EC%A0%95_%EC%8B%AC%EB%B3%BC_%EC%8B%9C%EC%8A%A4%ED%85%9C.png",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMjY1/MDAxNzEwMDY4MDg2NjEz.81YNFiN060WVZ4YeO-0vhhm2pz6uy66ymnTREqbIt2Ag.UwYpCuUOUkiADxkSuyTOEUSNNkeUSajJoeIHi-Iwzukg.PNG/UP_THERE.PNG",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMzgg/MDAxNzEwMDY4MjkxOTE2.fxncl7khVXat9NlYTIiOYQqyDgVL6JCwng2zT-0c8RMg.IDMD9cmbL1tYhOIHzprFc8Cq4Mq77aJuP3bv7xT0zTAg.JPEG/Eureka.jpg",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMTUw/MDAxNzEwMDY4Mjk4NzM2.eOzCmQCD_i9aCIqvw-XpExuW4QopeufArGXnYkfsXycg.e9ObfGXVRv6RCJTFHBQsJED1Z7MTytVrqb7Vz969IKUg.PNG/%EB%8F%99%EB%AC%BC_%EC%97%86%EB%8A%94_%EB%8F%99%EB%AC%BC%EC%9B%90_%EC%A0%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.png",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMTAg/MDAxNzEwMDY4Mjg4MDc4.UaNxcr9amlJH4qOFC3-x8x6iM3YkJlrk_FpbyegXwWkg.KB8PgPl4-ooFuGXqR_pbe5rSNhszw3IEiJj5M_6WxWUg.JPEG/%EC%98%A4%EC%A7%80%ED%9B%84_1_%EC%84%B1%EC%88%98%EC%97%AD.jpg",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMzcg/MDAxNzEwMDY4MjgyOTA4.vbmQ4Uc0VBIhf-ErRU3elUpxIUtIg8ihIT4lxQgedYYg.3GE9fD-iwifYjt6lS2zJdgOtEOMuQZ4BC4SdRUBVSMIg.JPEG/%EC%98%A4%EC%A7%80%ED%9B%84_1_Glass_Flower.jpg",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMTQx/MDAxNzEwMDY4MjkzNDQz.IdRR1wp2rRsPegLUiJYzuZRQJQVDe5FpGNIM4lqfKIkg.Sdp5ueo8vN6T1lLU0nTMTuROBMpgwMZHTaU-_3Pm5h8g.JPEG/%EC%98%A4%EC%A7%80%ED%9B%84_1_Lipstick.jpg",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMzkg/MDAxNzEwMDY4MjgzMTI1.gqJ3YCTDVP9gDFpg8UNPCvkbiJqxToKnrxveI7mTb68g.wQfBuettZITNJlgBRCaXkW9uIxQqqcWJK3XV8tsKtGYg.JPEG/%EC%98%A4%EC%A7%80%ED%9B%84_1_SOAP.jpg",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMTg1/MDAxNzEwMDY4MzAyMDQ0.sRqiusIImSpbXAXME6XjtHqkrcxf0tw8dIbwcehWr8Ug.NhQPc7GNZ126SGwWSD8P75izO2SF0J_u1mN9JIXi-p8g.PNG/%ED%95%98%EC%88%98%EA%B5%AC_1.png",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfOTMg/MDAxNzEwMDY4Mjg4Nzk5.KI6z6IdNkhINnW4EFwEUIIDoK8A4RjvqgjeD5y8are0g.ZVJTXS6KDDsZDLJmVFSxnYYMHl42RL1S1mHgP8gdwxkg.JPEG/%ED%95%B4_SUN_%EB%8C%80%EC%A7%80_1.jpg",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMjA2/MDAxNzEwMDY4MjkxMDE0._1qTQdHvUjpfDeO-s7dfNAN4MaimNeSE621zNE-2x90g.8uYdOnGCniS9ryik0Ugox2jhVI6-9djXsF9P5NkkmJwg.JPEG/AMBITION.jpg",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMTY2/MDAxNzEwMDY4MzAwOTM4.1Vu27Tz4eIr3nGTwRqtmF5utFJH5EiILoznQsChw9OUg.YeA6ERQgzIVhZ5OLYi4mGAS_oUdUSnkM_sIjqp63_ukg.PNG/blond.png",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMjg5/MDAxNzEwMDY4MzAxMzU0.KF-gTdg06buXn8B-lmpbdm_AVlFiKsE2obcVj7LfWkAg.qH6zle0yOl3lYg0EuxJZvNLu3zGiRrZGZpc4RhRKwJ8g.JPEG/Clover_Poster.jpg",
                isVideo: false,
            },
            {
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMjUg/MDAxNzEwMDY4Mjk3NzQx.4JNb1ZBN8gCiRdAVYC4LnWWTBJEiPBFNsMDrGYgTAKAg.QsmybCCeh7Q28OcszNT1wLW8coERv98T3EavtxfgmFcg.JPEG/Colorful.jpg",
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
            "https://www.facebook.com/people/%EB%AF%B8%EB%A5%B4-MIR/100066338873711/?mibextid=ZbWKwL",
            "https://www.instagram.com/mir.__.official",
            "https://sunrinmir.github.io/"
        ],
        joinlink: "https://sunrinmir.github.io/",
        awards: [
            {
                year: "2023",
                content: [
                    "선린 교내 캐릭터공모전 은상",
                ]
            },
        ],
        gallery: [
            {
                url: "https://postfiles.pstatic.net/MjAyNDAzMDlfMTg3/MDAxNzA5OTkwMzc1NzQ0.dV27uPPi8KoUbPdHqsikIJqj74TRPoQrXyMSGOfh0icg.bhN2Qd3xm4uup337JoFHGR5GS7uZ6xGAtKH58xY6RwUg.PNG/%EB%8F%99%EB%AC%BC_%EC%97%86%EB%8A%94_%EB%8F%99%EB%AC%BC%EC%9B%90_%EC%A0%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.png?type=w773",
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
            "instagram",
            "https://sunrinmir.github.io/"
        ],
        joinlink: "https://sunrinmir.github.io/",
        awards: [
            {
                year: "2023",
                content: [
                    "선린 교내 캐릭터공모전 은상",
                ]
            },
        ],
        gallery: [
            {
                url: "https://postfiles.pstatic.net/MjAyNDAzMDlfMTg3/MDAxNzA5OTkwMzc1NzQ0.dV27uPPi8KoUbPdHqsikIJqj74TRPoQrXyMSGOfh0icg.bhN2Qd3xm4uup337JoFHGR5GS7uZ6xGAtKH58xY6RwUg.PNG/%EB%8F%99%EB%AC%BC_%EC%97%86%EB%8A%94_%EB%8F%99%EB%AC%BC%EC%9B%90_%EC%A0%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.png?type=w773",
                isVideo: false,
            },
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
        field: "영상·영화",
        link: [
            "instagram",
            "https://sunrinmir.github.io/"
        ],
        joinlink: "https://sunrinmir.github.io/",
        awards: [
            {
                year: "2023",
                content: [
                    "선린 교내 캐릭터공모전 은상",
                ]
            },
        ],
        gallery: [
            {
                url: "https://postfiles.pstatic.net/MjAyNDAzMDlfMTg3/MDAxNzA5OTkwMzc1NzQ0.dV27uPPi8KoUbPdHqsikIJqj74TRPoQrXyMSGOfh0icg.bhN2Qd3xm4uup337JoFHGR5GS7uZ6xGAtKH58xY6RwUg.PNG/%EB%8F%99%EB%AC%BC_%EC%97%86%EB%8A%94_%EB%8F%99%EB%AC%BC%EC%9B%90_%EC%A0%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.png?type=w773",
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
        field: "영상·영화",
        link: [
            "instagram",
            "https://sunrinmir.github.io/"
        ],
        joinlink: "https://sunrinmir.github.io/",
        awards: [
            {
                year: "2023",
                content: [
                    "선린 교내 캐릭터공모전 은상",
                ]
            },
        ],
        gallery: [
            {
                url: "https://postfiles.pstatic.net/MjAyNDAzMDlfMTg3/MDAxNzA5OTkwMzc1NzQ0.dV27uPPi8KoUbPdHqsikIJqj74TRPoQrXyMSGOfh0icg.bhN2Qd3xm4uup337JoFHGR5GS7uZ6xGAtKH58xY6RwUg.PNG/%EB%8F%99%EB%AC%BC_%EC%97%86%EB%8A%94_%EB%8F%99%EB%AC%BC%EC%9B%90_%EC%A0%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.png?type=w773",
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
        field: "영상·영화",
        link: [
            "https://www.instagram.com/sunrin_tapie/",
            "https://tapie.kr/"
        ],
        joinlink: "https://tapie.kr/",
        awards: [
            {
                year: "2023",
                content: [
                    "선린 교내 캐릭터공모전 은상",
                ]
            },
        ],
        gallery: [
            {
                url: "https://postfiles.pstatic.net/MjAyNDAzMDlfMTg3/MDAxNzA5OTkwMzc1NzQ0.dV27uPPi8KoUbPdHqsikIJqj74TRPoQrXyMSGOfh0icg.bhN2Qd3xm4uup337JoFHGR5GS7uZ6xGAtKH58xY6RwUg.PNG/%EB%8F%99%EB%AC%BC_%EC%97%86%EB%8A%94_%EB%8F%99%EB%AC%BC%EC%9B%90_%EC%A0%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.png?type=w773",
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
        field: "영상·영화",
        link: [
            "https://www.facebook.com/centerworld",
            "https://sunrinmir.github.io/"
        ],
        joinlink: "https://sunrinmir.github.io/",
        awards: [
            {
                year: "2023",
                content: [
                    "선린 교내 캐릭터공모전 은상",
                ]
            },
        ],
        gallery: [
            {
                url: "https://postfiles.pstatic.net/MjAyNDAzMDlfMTg3/MDAxNzA5OTkwMzc1NzQ0.dV27uPPi8KoUbPdHqsikIJqj74TRPoQrXyMSGOfh0icg.bhN2Qd3xm4uup337JoFHGR5GS7uZ6xGAtKH58xY6RwUg.PNG/%EB%8F%99%EB%AC%BC_%EC%97%86%EB%8A%94_%EB%8F%99%EB%AC%BC%EC%9B%90_%EC%A0%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.png?type=w773",
                isVideo: false,
            },
        ]
    },
]


const clubList: ClubList = clubInfo;

export default clubList;