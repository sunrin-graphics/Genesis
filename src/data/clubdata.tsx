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
                thumbnail: "https://i.ytimg.com/vi/KsOK53bQsHU/maxresdefault.jpg",
                url: "https://www.youtube.com/embed/KsOK53bQsHU?si=I6mh1FK9wFA8Gh5I",
                isVideo: true,
            },
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
        joinlink: "https://sunrinmir.github.io/",
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
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfNTMg/MDAxNzEwMDgxMjQ1MDI1.wjFwefqUc61aB7J2737LpBDNXjfKbBrTRe8CEAqAeXAg.-vje2liexsshY04qmRZ2xQt8OUjpcxAq-AinkbiUkLwg.PNG/%EA%B0%9C%EC%9D%B8%EC%9E%91(%EC%9C%A4%EC%A7%80%EC%97%B0)_(1).png",
                isVideo: false,
            },
			{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMjI3/MDAxNzEwMDgxMjQ1NTA4.mufKjrtcL-4W-6MFUERNQ1usKk6lDrfMtqCF-6t5vQIg.8FnrIH8JPSHHj39Z3VeaEw7jNyK4_8UhhpDiFq4_eoIg.PNG/2023%EA%B7%B8%EB%9E%98%ED%94%BD%EA%B3%B5%EB%AA%A8%EC%A0%84_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8%EB%B6%80%EB%AC%B8_%EB%8F%99%EC%83%81(%EC%9C%A4%EC%A7%80%EC%97%B0).png",
                isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMTMx/MDAxNzEwMDgxMjQ0NjE4.xJEJCihmlY2Jr4dmG9I1SP3Z6Lc_l4wgr01YxNCFIicg.tB1x4Q7Eqnqj6VRXA0AZIoP8CMz4hMPpUA437vZsld0g.JPEG/2023%EB%8F%99%EC%95%84%EB%A6%AC%EC%A0%84%EC%8B%9C%ED%9A%8C(%EA%B9%80%ED%95%9C%EB%B9%84).jpg",
                isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfNDUg/MDAxNzEwMDgxMjQ0NTY5.-TSTNH5HFgcfSOMr-MH1INiTz2-2K9WL3gMV7mtIjpsg.cDlJCc97LdwYJfLgMlI8GH1JJT37SIV8GGMyQLvJWtwg.JPEG/2023%EB%8F%99%EC%95%84%EB%A6%AC%EC%A0%84%EC%8B%9C%ED%9A%8C(%EC%9C%A0%ED%98%B8%EB%B9%88).jpg",
                isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMTI4/MDAxNzEwMDgxMjQ0NjQ0.4VVQyhsHAbIRlquczrVtHTFLQ8EngIZtiljqzDEHxc8g.qbEfnq-iraQ76_wTW3gZmfK-oIhsmhuovUVShmpSujMg.JPEG/2023%EB%8F%99%EC%95%84%EB%A6%AC%EC%A0%84%EC%8B%9C%ED%9A%8C(%EC%A0%95%EC%84%A0%EC%9E%AC).jpg",
                isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMjIx/MDAxNzEwMDgxMjQ1MDE1.TsofH4xAZpsYSEIkwye5weNcwu2uu7pxil2M_yTjjSUg.ALFSPrYWE31OJoSPHRAcNS3KwY7NbW8h4EKFweKm0Mkg.JPEG/2023%EC%BA%90%EB%A6%AD%ED%84%B0%EA%B3%B5%EB%AA%A8%EC%A0%84_%EB%8F%99%EC%83%81(%EA%B9%80%ED%95%9C%EB%B9%84).jpg",
                isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMjAw/MDAxNzEwMDgxMjQ1ODk0.jH1VE7HkE_G1y0baYIALx3l4bTIXGvEB4dSXNMNKsBYg.7IKKNhsCaMOahWJpc_3mLXPUgysPZQhu4C62Rqnjm_gg.JPEG/2023%EC%BA%90%EB%A6%AD%ED%84%B0%EA%B3%B5%EB%AA%A8%EC%A0%84_%EB%8F%99%EC%83%81(%EA%B9%80%ED%95%B4%EC%9C%A4).jpg",
                isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMjk1/MDAxNzEwMDgxMjQ2NDM4.QvpewQnP5Yi6U03idjX5dfcxjRWY1jX5GPjRgvn8XRMg.9K2GW98cBQrR23h5yOwqTU-fPQ5APaShxHqoOxO3uQQg.JPEG/2023%EC%BA%90%EB%A6%AD%ED%84%B0%EA%B3%B5%EB%AA%A8%EC%A0%84_%EC%9D%80%EC%83%81(%EB%B0%95%EB%AF%BC%EC%84%B1).jpg",
                isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMjE4/MDAxNzEwMDgxMjQ3Mjg0.KAHQf_-RtmpKEZD-Ht5753eERuCuT2eX18MHLYjkZyEg._9J5NugPJYQQl9USsd4M1C7z0_QOfsUBaYjkB13y4I0g.JPEG/2023%EC%BA%90%EB%A6%AD%ED%84%B0%EA%B3%B5%EB%AA%A8%EC%A0%84_%EC%9D%80%EC%83%81(%EC%A0%95%EC%84%A0%EC%9E%AC).jpg",
                isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfNTYg/MDAxNzEwMDgxMjQ2NjY1.j8qHQ0-YMemYoOb8VJe5VrPyJG_Iz-4vw7-yVQmD9VEg.x7cxog3BWE9TE8ps9pXbMXWf5iBn85xi9zFX4Bm2YhIg.PNG/%EA%B0%9C%EC%9D%B8%EC%9E%91(%EB%B0%95%EC%84%B8%ED%99%98).png",
                isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTBfMzAw/MDAxNzEwMDgxMjQ3Mzc1.ZijLtLFz3VvFJNHBJb2orJnuaPGq3ck4nBl5IjR8xUog.fB1nNkLdFA7teJrTD_scbMluFU8gjjZR0ca1dncMnMog.PNG/%EA%B0%9C%EC%9D%B8%EC%9E%91(%EC%9C%A4%EC%A7%80%EC%97%B0)_(2).png",
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
        joinlink: "https://sunrinmir.github.io/",
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
        joinlink: "https://sunrinmir.github.io/",
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
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMTA1/MDAxNzEwMDkyMDg0NzYy.hyEGgakisBK0CGTPfagSs37WeYvacIKgBLFX1wEYnDog.e4u-M_Auj6f-DESogN9l_eehXtkpCkX10c0JPcxMNrsg.JPEG/bubbles.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMTA0/MDAxNzEwMDkyMDg0NzYz.L_jIEh2-PrnXx4qFiOf72TfbAUbJGYoU8OLCZArqJHQg.hrfuEt7gccDand2sVC_J2vuKf_60MWcClPcerXaMnWsg.JPEG/christ_hemsworth.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjE1/MDAxNzEwMDkyMDg0ODI2.VVCwaUdjAtP0-vaqzEm1xkfef64vkiL7gFbW-ZBRhCQg.ZpBMNpZBkANbV1D7Y3NQGKHt5UZakwZXEdRhjisdSUEg.JPEG/v.friends.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfNzIg/MDAxNzEwMDkyMDg1NjEw.G-5M4ijLJR6t-2pvN-tPzmcN58UOS7rjPj9Cuj9RpU8g.9SRampCVjmXTVb26TqrxXX8hrDKNRURs8WxbHeEaPd0g.JPEG/%EB%94%B0%EB%9C%BB%ED%95%9C_%EA%B2%A8%EC%9A%B8.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjI5/MDAxNzEwMDkyMTAxNjY0.DbXmbuz5jcKlchu3ND2nuavbYq_kT81SgvlZJr6ao5Ig.7kk3aewRDjiXRiArqulN-FTgY6bj_HmWSRyqamQopesg.PNG/%EB%93%B1%EB%8C%80.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjc1/MDAxNzEwMDkyMTAxNDA2._cyE6oeEXQeKVmXzlPN8i_hgnF6psX95gaFDL2WD-okg.-WKYhBaGTvpn8YdDZW6xYqRpAy30RhPiUJOXneF4auMg.PNG/%ED%94%84%EB%A0%88%EB%94%94%EC%9D%98_%ED%94%BC%EC%9E%90%EA%B0%80%EA%B2%8C_1.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMTA3/MDAxNzEwMDkyMTAxNjY3.fphoyalBgvWTDYsRedLVjiMMpAEBprZDT7vDa5TZrdIg.ZskzFDAX49XgrcwVl4-kDsu7Fz_Bpd0sqtfBtAB_iUAg.PNG/%ED%94%84%EB%A0%88%EB%94%94%EC%9D%98_%ED%94%BC%EC%9E%90%EA%B0%80%EA%B2%8C2.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMTE3/MDAxNzEwMDkyMTAxNjM0.oCH0hRMWOrihOmF-IB0weqUUpcYle37-EZO3S92DuhAg.aMOoex9tc2MceWvfFOFnYbTfal9PT-N06d2DaX-lQeYg.PNG/%ED%95%B8%EB%93%9C%ED%8F%B0.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjgx/MDAxNzEwMDkyMTA5MTcx.O31Vu8DTpiaSlXDd20Aimhl11bGBr9rA10m_xNyKC1Mg.dLKz9R3R115dkwuTLOXFVJn-x0y_rokkejTmYZwt4Qsg.JPEG/%EA%B0%80%EC%9D%84.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfNDQg/MDAxNzEwMDkyMTA5NDMy.fgrKpU_Xk7cN4uFmT0qkt_IW4kNVqPmqVToUBx_LuAYg.QhcE3cQcAC7IkI2sxzTNvN9NY7mwiXqFRIHhfd-Rntgg.PNG/%EB%85%B8%EC%9D%84.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjYx/MDAxNzEwMDkyMTA5MDM5.oHsTiwxbS-cV1SVbGcnceV3kNuj75bAaKIJxLziqqUEg.UPQeKk5oUWGT41TcnDr1gnpv0ARpaLSCPLdCdfwm4qcg.PNG/%EB%94%B8%EA%B8%B0_%ED%83%95%ED%9B%84%EB%A3%A8.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMTYy/MDAxNzEwMDkyMTEwMDg1.Jb-Enr7mvzUkV-NsVY2nd0eJKoXmq4Du1146hbdoVowg.XnAwtAKNpW1JMCEAeTyz98uUAjMACDTjnHxDG5rFjn4g.PNG/%EB%B0%94%EB%8B%A4_%EC%B6%98%EC%8B%9D%EC%9D%B4.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMTk3/MDAxNzEwMDkyMTA5MTEx.R7iqMcshPHJx08KgDUymqw868ZJMKrWmKSB3gSF8944g.3331NGM4-7m44R0YGyube7NrkD6RxT_bSFr0aKiOnAIg.PNG/%EC%9E%90%ED%8C%90%EA%B8%B0.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMTQg/MDAxNzEwMDkyMTA4OTU0.zuLzxt6NbdR5UM7ChPAiiCFGHxIXYveET-p5y82hrYog.7mVLFrjEfSmIvB3ChhcVy3MYQzfNy8c_25MPHWgG-ygg.PNG/%EC%B6%98%EC%8B%9D%EC%9D%B4.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjk1/MDAxNzEwMDkyMTM5NTg5.76y_LJpolOwGurUVMgmfnUCL0oMrbPQFb-an-PlYrCUg.zY8yhB_7ExWHdNrxnhIlnPUo2pY7I4t1G2UEblKHpBIg.JPEG/TRAVEL_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMTg3/MDAxNzEwMDkyMTM5ODQ4.vc9qNVEI_nfR00lD0apa1wVC8B6oskSiTZVrc0n3DXMg.8TKR47cj8iDwmnQLY6Nqxpo-9P_M9J-w6CH-SbCLQpkg.JPEG/%ED%99%98%EA%B2%BD_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjMz/MDAxNzEwMDkyMTYyMDk4.Fvcjv9puO0wOcxRdf9vVby-_RdLMjNsrxLcSf1tXpUUg.9es9yrY05RCnHqJilyR9Uyw5_Xg4fDWFLauvNN7054gg.PNG/%EC%9C%84%ED%82%A4%ED%8E%AB.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfODAg/MDAxNzEwMDkyMTYyMDYx.Z8u8sgmlospYqL1rIKflHRaeyggS6rMSze9WmB0Wk3Yg.9yzsOxxwvYeOI7YOlEZU1RiwVQlimjOvBU3Uwvq5Mucg.JPEG/%EC%BD%94%EC%BD%94%ED%8C%9C_%EB%A6%AC%EB%94%94%EC%9E%90%EC%9D%B8.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjU5/MDAxNzEwMDkyMTc0ODc4.Xt37uTJpzoRcNXiB94OUJ2onexPxtaQKthv4zvg7b2Ag.7GYL5NGB4YbET1AQWdoXfbgH6uCzQPz80le0x-EL9Uwg.PNG/3D_%ED%86%A0%EA%B9%BD%EC%9D%B4.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjk2/MDAxNzEwMDkyMTc0NjQw.CUU8Lg5ivdASSPq6ZoI7FmuT6GrcCQ4cAGs_mz_slL4g.duJFFA7tafM0-dSw9u3Rm3sHDgCFPPYrrNc-KuERRogg.PNG/CD_IN.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMTQx/MDAxNzEwMDkyMTgzMzQ2.OZzHoa5RGrLk9fM39bPPg0h9m-3-XAXsJBW7d-YSnkUg.lUenZyyayllNRo4uZZs6Cwz0yv0kPeQ0VUZI_ugSINQg.PNG/%EB%B0%A9_%EC%95%88.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfNzUg/MDAxNzEwMDkyMTgzNjc0.ZDHyDNml9rfE5f12sZk-I0l6pWATFpvXgqDZa0EAVZ0g.SdyolwzN3eatxWtrX6i07tiS5moC-egOLVDJgbi2y9Ag.PNG/%EC%B1%85%EA%B3%BC_%EC%BB%A4%ED%94%BC.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjM3/MDAxNzEwMDkyMTgzMjM1._ULv0Z7a5CMPitxntvNrgcvllOFEjG1WQNrcPbAJ8fcg.w0-DgPlXeH4TpkGCYx6c2IYHo4h9a4A7XsYMatPKgGUg.PNG/%EC%BB%A4%ED%94%BC.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjAx/MDAxNzEwMDkyMTkzMTcx.4HslNHyhuSGiCeecJsVmKjdqACIuuCFne35rx_6VVAEg.ITzo9dvJWMF3MU9wxDlZXkrSTW7dVe1-JeufDIa9GcMg.PNG/2023_%EB%8F%99%EC%95%84%EB%A6%AC_%EC%A0%84%EC%8B%9C%ED%9A%8C_%EB%A9%94%EC%9D%B8%ED%8F%AC%EC%8A%A4%ED%84%B0.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfNjgg/MDAxNzEwMDkyMTkzMzM3.yGFJn4R6lxn9ou7aav0OUMxSWJ3K_csNi_XCKHY0vRcg.19YLfE1mVJQ7Ne_F4C1nG2AfYlkUh3lbdK3KhfAvhsAg.PNG/%EB%AA%BB%EB%82%9C%EC%9D%B4_%EC%9D%8C%EB%A3%8C.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjk4/MDAxNzEwMDkyMTkzMzE1.mhveCc7x6N8Co_mBiVkG1gtCIwlb3byFAp2ML3cv4rkg.Ba85lB4nnOM5dVnAZ-jSufGE2G9kTIjgLW6lTfLz0P0g.PNG/%EC%84%A0%EB%83%A5%EC%9D%B4.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfNTcg/MDAxNzEwMDkyMTk0Mjcz.0GyeC3WWez2BFN9sRzm9-6WuI0zzRt2g1xYbbbhtNSMg.Z0q1ki2Z1T6rvwNYayAj2ofwQxU09yoeSvdg1CSoPCsg.PNG/%EC%86%8C%EB%8B%A4.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMTcw/MDAxNzEwMDkyMTkzMTQy.O9fF2vBO8cBQVZB5FOIIovsAmScTjdseVm1XwqQkargg.jsMfVIkB3PtDneGJJ8pEHQ5ZVW1N_vWiASJxI3nMhZQg.PNG/%EC%95%84%EB%B2%A8.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMTcg/MDAxNzEwMDkyMTk0Mjgx.jw4UPLrXTVXcMzyIXrARbRnZ_pCFa2rBu59EPXja6HEg.qiaohSofhh5_pULqpoa-4Uuoj-m43Lt1Wbh0jfp54zUg.PNG/%EC%95%84%EC%9D%B4%EB%A6%AC%EC%8A%A4.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMTU0/MDAxNzEwMDkyMjQ1OTA3.pH1pOegcR_BWVE--H9YfpH7DRHqjU6Dywz0JtCXVhg8g.mNUY8d3WNvNCfouKzMharp_rg3Jlkjs717I66LZA2eMg.PNG/2023_Happy_New_Year.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfNyAg/MDAxNzEwMDkyMjQ1OTk2.VJIzAeiTJY_Y11grWsQmWTdj2_ypq5CKIsNdVdhhcD8g.l68Sc9R9dcd4KfSuIRY9JQd6aBvWPJV0YyjiZ7jAcFwg.JPEG/Neoul_A1_1.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfNTUg/MDAxNzEwMDkyMjQ1Nzk4.amp1wMy57K7lQxQM_JoRoQC4tMA1fFhyx8WvGoX86OQg.YAqj2C1rvEiPXyGLbIUcmneDK1vuYyDCQoqIRgqwx_8g.JPEG/Neoul_A1_2.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjgg/MDAxNzEwMDkyMjQ1NDI2.mtOX4yftDnGrxwLPoCFXiTO-4HSVmnYZzqM6vNJDjqAg.2M6UKtAwP0KhhpHnBDesP-2oRP0ERRKfVoSwfJY2_oUg.JPEG/%EA%B2%BD%EB%82%A8_%EA%B3%B5%EB%AA%A8%EC%A0%841.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjYw/MDAxNzEwMDkyMjQ1Mzc3.bui6Z2JZhu8IcMt2npx0WzJAxqLPAlaiY_UC1OWrG9Ig.zj_qAHjhqVpfP9iQrlcswcWU7494gJ1mUec6eofXFlwg.JPEG/%EA%B2%BD%EB%82%A8_%EA%B3%B5%EB%AA%A8%EC%A0%842.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMTIz/MDAxNzEwMDkyMjQ1OTA1.4OYNoKmamJQh6YlPmFOwKjz9KokfphGp3YKt_rpsrRgg.8FJxkxz6uNqcarVYPUkaLzQmVKWulHkPxsH78qbpsXgg.JPEG/%EB%86%80%EB%A9%8D%EB%8F%84%EC%84%9C%EA%B4%801.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjYx/MDAxNzEwMDkyMjQ3MTE4.ZH0rAz5rRZLWAl5qn2qDB_UH4UxWYL4b7qqd6ifCn5Yg.E5BvV1N0Z9s4UZI8hzaawggVlVNAHm4Ht1R2u5gAjoog.JPEG/%EB%86%80%EB%A9%8D%EB%8F%84%EC%84%9C%EA%B4%802.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMTAw/MDAxNzEwMDkyMjQ3MzY3.XKSNCSylBqlVLN2-hFRHHTyBnStKyu6oxQJ3N6sW8Jog.2MhQKCAS3XTIUqn1ZCAmAwlJbwP2IpKD6CVYmre0ycQg.JPEG/%EB%B0%80%ED%82%A41.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjUw/MDAxNzEwMDkyMjQ3ODU3.X-D9wPSK_NOI5DBRjZ4nugrPK1KEy6icv3FO907fhcIg.YlqX9GPybB3UMy6ST13imJ79zvk5UYdjannrYvk2S30g.JPEG/%EB%B0%80%ED%82%A42.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMTEg/MDAxNzEwMDkyMjk4MjEy.W2po2kQwhebi5gOyAsJOin-Iy4WVMPQBktpvaudCutIg.-Kb91PaMvSqXHtOQyj8g3n7KY6lPSMuhg7HyEUu_r0Qg.JPEG/%EB%B2%A0%EB%86%88.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjAg/MDAxNzEwMDkyMjk4MjEx.21wB8mAJcRchP4oIyp9--PIRahWJXn8H1Ycp0WZTm6Yg.NPBFO1pYLklFtWLL4dZIhNDDCV3Qo2A3_Sk5UJCo5vEg.JPEG/%ED%85%80%EB%B8%94%EB%9F%AC.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjcw/MDAxNzEwMDkyMjk4Mjc4.xeYUx_luqCpX0-WX45YtiA_UixX2ezd_M-wOiMtj-OIg.-5gzi9p7BRo0ZsWrK332fVhTpruOY5qdN4pvwCdN6Q8g.JPEG/%ED%9E%88%EB%93%9C%EB%9D%BC%EB%A6%AC%EC%8A%A4%ED%81%AC.jpg",
				isVideo: false,
            }
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
        field: "게임 디자이너",
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
        joinlink: "https://sunrinmir.github.io/",
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
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfNTkg/MDAxNzEwMDkzMDIyMTg0.CMkeqQdEHGeLUk2ksuFj7S4Vn449u0H9j0ZfzCnFEuEg.-fpRz_f_s3cAuZW9zOYj1aidNXOOBIaIQVKz7bz31uQg.JPEG/%EC%9C%A4%EC%86%8C%ED%98%8405.jpg",
				isVideo: false,
            },
			{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMTEw/MDAxNzEwMDkzMDIyMTk2.e3MOEB-yYqQI7gSpYj3QmID3CuZioPASiCYRoK4t_lQg.Rm7JVpLCQPHnUJx-JiwDZSp4G4f28pjI61H1dj422Y0g.JPEG/%EC%A1%B0%EC%97%B0%EC%A7%8401.jpg",
				isVideo: false,
            },
			{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMzQg/MDAxNzEwMDkzMDIyMTc3.FdBhf79eOaZ9R5TNj-R0rkOY_fMukBGIbhUsBNO6_wAg.Ctb4mcvcx3c-5AeDLdhvZGi0v18Ssk5qJHdoVgd9U-0g.JPEG/%EC%A1%B0%EC%97%B0%EC%A7%8402.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfOCAg/MDAxNzEwMDkzMDIyMTc0.S0X2qe3Q2E_7oR0YMfIDcnVS0dgTcssR9W7ZAiQo8Hog.b47ggkCQm_yFkYrXsQ4Tt3LauqjCXGDGFU6grz5zX0wg.PNG/%EC%A1%B0%EC%97%B0%EC%A7%8403.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMTg3/MDAxNzEwMDkzMDIyMTg1.ECePACr7yv8JPLMDFz8_hQgUKotfL2wnSxFBILYq9dsg.5UfHkg4uO8DVpiJHPZoyMjhgAz1viqGALALVmTSvuX0g.PNG/%EC%A1%B0%EC%97%B0%EC%A7%8404.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjIw/MDAxNzEwMDkzMDIyNDQx.JeYRfHISOj66o9-Sda5rXiiJD8Ldcn3SD87D4NgsNFQg.cbbHC3cMSLpknZEQZA7Es5MLpcIeqQbkAtC3pMRkw9gg.PNG/%EC%A1%B0%EC%97%B0%EC%A7%8405.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjk4/MDAxNzEwMDkzMDIyMTkw.MQcS6p11EybERqlOmWpQaNhE5cpLbmPoUMO2amm8RZ4g.y_SAhKyikuk2R1zdFZ6Y0pIXmMi8MgyrmfJb8MN0-kQg.PNG/%EC%A1%B0%EC%97%B0%EC%A7%8406.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjI5/MDAxNzEwMDkzMDIyNDQ3.iNndFpAwjaHPXpHw-5tOdvBBywv7m3A_FCM6ZK7QACcg.HkvukuSEsNdtsd2_vOsYHSJ8VbgqwMgo-2bz0AXCRdwg.JPEG/%EC%B0%A8%EC%9C%A4%EC%8A%AC01.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMTc1/MDAxNzEwMDkzMDIyNDUx.mqIXLhOxz3nDyrmBD7at0t8W9yzDE4tgFpyt2RKkVfkg.M4HpfNa16Udf0jZnT4abBKPLqjQ88skYX-wXj1uE0pUg.JPEG/%EC%B0%A8%EC%9C%A4%EC%8A%AC02.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjQ1/MDAxNzEwMDkzMDIyNzA3.OCHNu1QddtyJqPxV9C0Xy1o9ma_lxm_iaW7MFyPNedYg.15sRJ9oyRXXeSHRgiF4rby7erSBh0xqz73z9kUtlHxMg.PNG/%EC%84%9C%EC%9D%B4%EC%A4%80%EB%A3%A8%ED%95%9801.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMTQ5/MDAxNzEwMDkzMDIyNjQ5.9KfS06HVcs3ZgpjoQmMfrRIa3rkdlfsgINsQhDe6NqMg.z6dYfZ4Q_7Nxqus37I3zBX0KEYJli7Gnjbn2ZQ_I8qIg.PNG/%EC%84%9C%EC%9D%B4%EC%A4%80%EB%A3%A8%ED%95%9802.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMTMx/MDAxNzEwMDkzMDIyODI3.Y4mBGXr1MMj2UQU4GbQwjpjUIPQQ4Xm5cKYwpUFI84og.bWaU7f8WdZTcwyDGcfyzzl2kYN5ApcZ0jpHuu9oAgBog.PNG/%EC%84%9C%EC%9D%B4%EC%A4%80%EB%A3%A8%ED%95%9803.png",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjUz/MDAxNzEwMDkzMDIyNzE1.aw4vUTEYDomBt0WgWTzxFsyfZT30UwQHEC6yFGIv5kIg.m0972Ex9gQKxX_hwzGI1IPaWsy-A7JBWaA9fMqCjiCcg.JPEG/%EC%9C%A4%EC%86%8C%ED%98%8401.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMTUg/MDAxNzEwMDkzMDIyOTIx.5OPp-QI72q05x2UUShCiSrG5ISAyHzsA0E6Xv5eDgYYg.DYKtBjNy24J3PKTq_7pzaF1YYSPwQI66CBLXKoziVJQg.JPEG/%EC%9C%A4%EC%86%8C%ED%98%8402.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfMjYy/MDAxNzEwMDkzMDIyOTYw.izUFFd3iobziUzg5rlXsbnHu3G_Oh4U45NtLELVuz7gg.Nm4h6yC-ospZEZzqoTqIcVgJ2WRQu2Yry1jkBEmOQ1Qg.JPEG/%EC%9C%A4%EC%86%8C%ED%98%8403.jpg",
				isVideo: false,
            },{
                url: "https://blogfiles.pstatic.net/MjAyNDAzMTFfNDIg/MDAxNzEwMDkzMDIyOTgx.d4NKQd4vnoeyTeV8Lu2BI_QlBDvKdSuBCAvszIRHzB4g.x1-T3Cm7HKLzZC4hzfsFuvdLsCGNfhDPZUZcii-6VeYg.JPEG/%EC%9C%A4%EC%86%8C%ED%98%8404.jpg",
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
        field: "앱·웹 UI 디자이너",
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
        joinlink: "https://sunrinmir.github.io/",
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