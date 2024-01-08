interface Props {
  size?: number
}

const ProjectIcon = ({ size }: Props) => {
  return (
    <svg
      width={size ?? 50}
      height={size ?? 50}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 512 512"
    >
      <path
        d="M0 0 C146.52 0 293.04 0 444 0 C444.103125 46.81875 444.20625 93.6375 444.3125 141.875 C444.38078003 164.0569458 444.38078003 164.0569458 444.45043945 186.68701172 C444.47302246 204.73266602 444.47302246 204.73266602 444.47721863 213.17825317 C444.48188048 219.08208166 444.50021746 224.98567345 444.52787781 230.88943481 C444.55974397 237.70096622 444.5741706 244.51227069 444.56722475 251.32387716 C444.56421736 254.80711139 444.56892729 258.28983866 444.59607565 261.7729795 C444.62096982 265.50831581 444.61494258 269.24238692 444.60127258 272.97775269 C444.61583591 274.05723238 444.63039923 275.13671207 444.64540386 276.24890327 C444.53610664 287.37137244 439.83611845 294.86503969 432.33203125 302.8046875 C425.58669428 309.1545692 417.49290855 313.36735153 408.14946651 313.38869667 C407.49387171 313.39425538 406.83827691 313.39981409 406.1628156 313.40554124 C403.97448175 313.42045372 401.78674127 313.41415944 399.59837341 313.40786743 C398.01013129 313.41419126 396.42189388 313.42180718 394.83366352 313.43060148 C390.47545838 313.45087675 386.11741791 313.45243021 381.75917327 313.45081019 C377.05615832 313.45225576 372.35320571 313.47084573 367.65022278 313.48706055 C357.36903122 313.51916613 347.08788985 313.52899338 336.80665469 313.53470278 C330.38401101 313.53845547 323.9613807 313.54726482 317.53874397 313.55720139 C299.74783225 313.5841404 281.95693346 313.6066499 264.16599941 313.60907936 C263.02776919 313.60923493 261.88953896 313.60939051 260.71681691 313.6095508 C258.40944962 313.60984185 256.10208233 313.61012722 253.79471504 313.61040695 C252.07669853 313.61062123 252.07669853 313.61062123 250.32397461 313.61083984 C249.17722816 313.61097951 248.03048172 313.61111918 246.84898538 313.61126308 C228.27398783 313.61439731 209.69922363 313.65097618 191.1243031 313.7024761 C172.04261074 313.75495822 152.96103352 313.78119195 133.87926728 313.78063047 C123.17002987 313.78088288 112.46106058 313.79207376 101.75189018 313.83180618 C92.63144608 313.86547242 83.51137446 313.8748496 74.39088749 313.85304923 C69.7408484 313.84263494 65.09153821 313.84333177 60.44157791 313.87481308 C56.17669767 313.90340389 51.91310709 313.89911105 47.64824439 313.8696541 C46.11321275 313.86465062 44.5780853 313.8712414 43.04317551 313.89121862 C30.19482532 314.04745517 20.02563328 310.98251178 10.4375 302.0625 C4.78423633 295.81606734 -0.25371907 288.60544516 -0.24609566 279.93381023 C-0.2500774 278.93077421 -0.25405914 277.92773819 -0.25816154 276.89430714 C-0.25233622 275.80026412 -0.24651089 274.7062211 -0.24050903 273.57902527 C-0.24222107 272.41375809 -0.24393311 271.24849091 -0.24569702 270.0479126 C-0.24843137 266.81104509 -0.24215889 263.57433749 -0.23214546 260.33748887 C-0.22341326 256.79429761 -0.22633461 253.25111248 -0.2277813 249.7079134 C-0.22884474 242.82966995 -0.2196089 235.95147871 -0.20677864 229.07324867 C-0.1923823 221.11739011 -0.19078934 213.16156294 -0.18920898 205.20568848 C-0.17870701 184.19961737 -0.1507848 163.1935579 -0.125 142.1875 C-0.08375 95.265625 -0.0425 48.34375 0 0 Z M251 45 C250.36648048 46.27263304 249.77742266 47.56777901 249.21875 48.875 C248.69692139 50.07950806 248.69692139 50.07950806 248.16455078 51.30834961 C247.78024902 52.19659424 247.39594727 53.08483887 247 54 C246.11453727 55.98161379 245.22635628 57.96201446 244.3359375 59.94140625 C238.90237777 72.07886337 233.59058862 84.25038787 228.52026367 96.54418945 C225.71329034 103.33591504 222.80412583 110.07248328 219.77441406 116.76782227 C217.52949932 121.74108637 215.42154132 126.76417019 213.33227539 131.8046875 C211.05634325 137.26325444 208.71175331 142.69226085 206.375 148.125 C202.34492076 157.50832827 198.34306357 166.90272348 194.375 176.3125 C189.70436294 187.37991556 184.94419554 198.40634803 180.13134766 209.41259766 C179.03774583 211.91367495 177.9463112 214.41568694 176.85546875 216.91796875 C176.21625491 218.3828601 175.57693914 219.84770698 174.9375 221.3125 C174.50679199 222.29984131 174.50679199 222.29984131 174.06738281 223.30712891 C173.08224385 225.55931002 172.09955732 227.80088537 171 230 C170.48487383 234.09157355 170.05632731 238.23589546 172.046875 241.95703125 C174.45871338 244.87251823 176.39760353 246.8269979 180.20703125 247.23828125 C184.27160021 247.35406357 187.19315105 247.40342448 190.875 245.5625 C192.75189072 243.2991906 193.65251605 241.7660899 194.78125 239.125 C195.30307861 237.92049194 195.30307861 237.92049194 195.83544922 236.69165039 C196.21975098 235.80340576 196.60405273 234.91516113 197 234 C197.88546273 232.01838621 198.77364372 230.03798554 199.6640625 228.05859375 C205.09762223 215.92113663 210.40941138 203.74961213 215.47973633 191.45581055 C218.28670966 184.66408496 221.19587417 177.92751672 224.22558594 171.23217773 C226.47050068 166.25891363 228.57845868 161.23582981 230.66772461 156.1953125 C232.94365675 150.73674556 235.28824669 145.30773915 237.625 139.875 C241.65507924 130.49167173 245.65693643 121.09727652 249.625 111.6875 C254.29563706 100.62008444 259.05580446 89.59365197 263.86865234 78.58740234 C264.96225417 76.08632505 266.0536888 73.58431306 267.14453125 71.08203125 C267.78374509 69.6171399 268.42306086 68.15229302 269.0625 66.6875 C269.34963867 66.02927246 269.63677734 65.37104492 269.93261719 64.69287109 C270.91775615 62.44068998 271.90044268 60.19911463 273 58 C273.51512617 53.90842645 273.94367269 49.76410454 271.953125 46.04296875 C269.54128662 43.12748177 267.60239647 41.1730021 263.79296875 40.76171875 C256.50726713 40.54546517 256.50726713 40.54546517 251 45 Z M127.3125 89.1875 C125.87389976 90.36613182 124.43509833 91.54451812 122.99609375 92.72265625 C122.30499512 93.29000488 121.61389648 93.85735352 120.90185547 94.44189453 C115.93172184 98.51370362 110.90367922 102.51317106 105.84375 106.47265625 C98.74203957 112.02994266 91.69672533 117.64799035 84.71191406 123.35180664 C81.76923515 125.75422244 78.82427542 128.15058479 75.8359375 130.49609375 C74.94132812 131.19863281 74.04671875 131.90117187 73.125 132.625 C72.36445312 133.21539062 71.60390625 133.80578125 70.8203125 134.4140625 C68.4811203 136.45207115 67.13553355 138.17110532 66.62890625 141.26953125 C66.512616 145.72276368 66.57865126 148.30681336 68.9375 152.1875 C72.60723229 155.85723229 76.86199502 158.8875006 81 162 C83.1920931 163.70283541 85.37997655 165.41000746 87.5625 167.125 C88.1505542 167.58648437 88.7386084 168.04796875 89.34448242 168.5234375 C95.3912888 173.28284889 101.3551341 178.14290654 107.3203125 183.00390625 C111.85600684 186.6999558 116.41698429 190.36279634 121 194 C121.55993652 194.44649902 122.11987305 194.89299805 122.69677734 195.35302734 C124.56617257 196.84270939 126.43899475 198.32799143 128.3125 199.8125 C128.8998291 200.28123535 129.4871582 200.7499707 130.09228516 201.23291016 C137.17286469 206.93766393 137.17286469 206.93766393 146.00390625 208.35546875 C150.05093604 207.63476481 152.88097573 205.42421271 155.375 202.25 C156.72814579 197.37867516 156.70325772 193.53438047 154.625 189 C150.86918108 184.70763552 146.52604914 181.44841839 142 178 C139.78586902 176.27820373 137.5803624 174.54550642 135.375 172.8125 C134.79089355 172.35488281 134.20678711 171.89726562 133.60498047 171.42578125 C128.94754732 167.76896361 124.34159419 164.05153205 119.75 160.3125 C119.07670654 159.764729 118.40341309 159.21695801 117.7097168 158.65258789 C114.75946975 156.25113972 111.81228734 153.84611952 108.87109375 151.43359375 C107.98550781 150.71300781 107.09992188 149.99242187 106.1875 149.25 C105.43855469 148.63640625 104.68960938 148.0228125 103.91796875 147.390625 C101.94788932 145.81548708 101.94788932 145.81548708 99 145 C99 144.34 99 143.68 99 143 C99.55945313 142.75121094 100.11890625 142.50242187 100.6953125 142.24609375 C103.392129 140.78798449 105.52717002 139.03567626 107.875 137.0625 C112.0965493 133.55665707 116.36022769 130.12422025 120.6875 126.75 C126.61296529 122.11954753 132.46674219 117.4060802 138.28833008 112.64575195 C141.22434401 110.24631614 144.1630206 107.85690901 147.1640625 105.5390625 C148.50597656 104.49878906 148.50597656 104.49878906 149.875 103.4375 C151.01582031 102.56931641 151.01582031 102.56931641 152.1796875 101.68359375 C155.39766915 98.707306 155.95383672 96.47702052 156.375 92.125 C156.26235068 87.81214034 154.82617939 85.29720929 152 82 C148.99095015 79.63574655 145.8557178 79.73384559 142.09765625 79.63671875 C136.34118668 80.63364923 131.68810307 85.57233232 127.3125 89.1875 Z M288.625 85.75 C287.27185421 90.62132484 287.29674228 94.46561953 289.375 99 C293.13081892 103.29236448 297.47395086 106.55158161 302 110 C304.21413098 111.72179627 306.4196376 113.45449358 308.625 115.1875 C309.20910645 115.64511719 309.79321289 116.10273438 310.39501953 116.57421875 C315.05245268 120.23103639 319.65840581 123.94846795 324.25 127.6875 C324.92329346 128.235271 325.59658691 128.78304199 326.2902832 129.34741211 C329.24053025 131.74886028 332.18771266 134.15388048 335.12890625 136.56640625 C336.01449219 137.28699219 336.90007812 138.00757813 337.8125 138.75 C338.93591797 139.67039062 338.93591797 139.67039062 340.08203125 140.609375 C342.05211068 142.18451292 342.05211068 142.18451292 345 143 C345 143.66 345 144.32 345 145 C344.44054687 145.24878906 343.88109375 145.49757813 343.3046875 145.75390625 C340.607871 147.21201551 338.47282998 148.96432374 336.125 150.9375 C331.9034507 154.44334293 327.63977231 157.87577975 323.3125 161.25 C317.38703471 165.88045247 311.53325781 170.5939198 305.71166992 175.35424805 C302.77565599 177.75368386 299.8369794 180.14309099 296.8359375 182.4609375 C295.94132812 183.15445313 295.04671875 183.84796875 294.125 184.5625 C293.36445313 185.14128906 292.60390625 185.72007812 291.8203125 186.31640625 C288.60233085 189.292694 288.04616328 191.52297948 287.625 195.875 C287.73764932 200.18785966 289.17382061 202.70279071 292 206 C295.00904985 208.36425345 298.1442822 208.26615441 301.90234375 208.36328125 C307.65881332 207.36635077 312.31189693 202.42766768 316.6875 198.8125 C318.12610024 197.63386818 319.56490167 196.45548188 321.00390625 195.27734375 C322.0405542 194.4263208 322.0405542 194.4263208 323.09814453 193.55810547 C328.06827816 189.48629638 333.09632078 185.48682894 338.15625 181.52734375 C345.25828276 175.9698051 352.30660821 170.35461696 359.28808594 164.64599609 C362.2241568 162.24644777 365.16292956 159.85697932 368.1640625 157.5390625 C369.05867188 156.84554687 369.95328125 156.15203125 370.875 155.4375 C371.63554687 154.85871094 372.39609375 154.27992188 373.1796875 153.68359375 C375.73617056 151.31912122 376.7807066 149.26959336 377.37109375 145.8515625 C377.49566685 141.67469959 377.3153774 139.50867323 375.0625 135.875 C371.4135624 132.15511084 367.15345525 129.12412069 363 126 C360.8079069 124.29716459 358.62002345 122.58999254 356.4375 120.875 C355.8494458 120.41351563 355.2613916 119.95203125 354.65551758 119.4765625 C348.6087112 114.71715111 342.6448659 109.85709346 336.6796875 104.99609375 C332.14399316 101.3000442 327.58301571 97.63720366 323 94 C322.44006348 93.55350098 321.88012695 93.10700195 321.30322266 92.64697266 C319.43382743 91.15729061 317.56100525 89.67200857 315.6875 88.1875 C315.1001709 87.71876465 314.5128418 87.2500293 313.90771484 86.76708984 C306.82713531 81.06233607 306.82713531 81.06233607 297.99609375 79.64453125 C293.94906396 80.36523519 291.11902427 82.57578729 288.625 85.75 Z "
        transform="translate(34,164)"
      />
      <path
        d="M0 0 C0.6555948 -0.00555871 1.3111896 -0.01111742 1.98665091 -0.01684457 C4.17498477 -0.03175705 6.36272524 -0.02546277 8.5510931 -0.01917076 C10.13933522 -0.02549458 11.72757263 -0.03311051 13.31580299 -0.04190481 C17.67400813 -0.06218007 22.03204861 -0.06373354 26.39029324 -0.06211352 C31.0933082 -0.06355909 35.79626081 -0.08214906 40.49924374 -0.09836388 C50.78043529 -0.13046946 61.06157666 -0.14029671 71.34281182 -0.14600611 C77.76545551 -0.1497588 84.18808581 -0.15856815 90.61072254 -0.16850471 C108.40163426 -0.19544373 126.19253306 -0.21795323 143.9834671 -0.22038269 C145.12169733 -0.22053826 146.25992756 -0.22069384 147.43264961 -0.22085413 C149.7400169 -0.22114518 152.04738419 -0.22143055 154.35475148 -0.22171028 C155.50009582 -0.22185313 156.64544016 -0.22199599 157.82549191 -0.22214317 C158.97223835 -0.22228284 160.1189848 -0.22242251 161.30048113 -0.22256641 C179.87547869 -0.22570064 198.45024289 -0.26227951 217.02516342 -0.31377943 C236.10685578 -0.36626155 255.18843299 -0.39249528 274.27019924 -0.3919338 C284.97943664 -0.39218621 295.68840593 -0.40337709 306.39757633 -0.44310951 C315.51802043 -0.47677575 324.63809206 -0.48615293 333.75857902 -0.46435256 C338.40861812 -0.45393827 343.05792831 -0.45463509 347.7078886 -0.48611641 C351.97276884 -0.51470722 356.23635942 -0.51041438 360.50122213 -0.48095743 C362.03625376 -0.47595394 363.57138121 -0.48254473 365.106291 -0.50252195 C377.95464119 -0.6587585 388.12383323 2.40618489 397.71196651 11.32619667 C420.95487123 37.00786441 408.14946651 69.16554783 408.14946651 105.38869667 C261.62946651 105.38869667 115.10946651 105.38869667 -35.85053349 105.38869667 C-35.85053349 22.9292232 -35.85053349 22.9292232 -24.18256474 10.58400917 C-17.43722777 4.23412747 -9.34344204 0.02134514 0 0 Z M20.14946651 57.38869667 C17.32340778 61.62778477 17.48934405 65.4099417 18.14946651 70.38869667 C20.2005424 73.78358089 21.85431273 75.19192748 25.14946651 77.38869667 C29.97589467 78.09220993 33.93312101 78.12357208 38.14946651 75.57619667 C42.13094959 71.22144956 42.58161563 68.52941165 42.47368526 62.83400917 C42.01714883 59.39073435 40.68106006 57.70329649 38.14946651 55.38869667 C32.2280895 51.441112 25.00291889 52.08023313 20.14946651 57.38869667 Z M72.14946651 57.38869667 C69.32340778 61.62778477 69.48934405 65.4099417 70.14946651 70.38869667 C72.2005424 73.78358089 73.85431273 75.19192748 77.14946651 77.38869667 C81.97589467 78.09220993 85.93312101 78.12357208 90.14946651 75.57619667 C94.13094959 71.22144956 94.58161563 68.52941165 94.47368526 62.83400917 C94.01714883 59.39073435 92.68106006 57.70329649 90.14946651 55.38869667 C84.2280895 51.441112 77.00291889 52.08023313 72.14946651 57.38869667 Z M124.14946651 57.38869667 C121.32340778 61.62778477 121.48934405 65.4099417 122.14946651 70.38869667 C124.2005424 73.78358089 125.85431273 75.19192748 129.14946651 77.38869667 C133.97589467 78.09220993 137.93312101 78.12357208 142.14946651 75.57619667 C146.13094959 71.22144956 146.58161563 68.52941165 146.47368526 62.83400917 C146.01714883 59.39073435 144.68106006 57.70329649 142.14946651 55.38869667 C136.2280895 51.441112 129.00291889 52.08023313 124.14946651 57.38869667 Z M254.14946651 57.38869667 C251.32340778 61.62778477 251.48934405 65.4099417 252.14946651 70.38869667 C254.2005424 73.78358089 255.85431273 75.19192748 259.14946651 77.38869667 C261.96164292 77.59372951 264.67560327 77.68239455 267.48882198 77.67922401 C268.76490322 77.68929985 268.76490322 77.68929985 270.06676388 77.69957924 C272.88345309 77.71860128 275.69990454 77.72248559 278.51665401 77.72463417 C280.47337092 77.73105934 282.43008685 77.73778749 284.38680172 77.74480629 C288.49081811 77.7567897 292.59475026 77.76048604 296.69878292 77.75930214 C301.95705156 77.75909893 307.21477985 77.78639854 312.47292042 77.82084656 C316.51526526 77.84308735 320.5574795 77.84714054 324.59987926 77.84608269 C326.53836205 77.848443 328.47684821 77.85729065 330.41527081 77.87274742 C333.1276723 77.89234971 335.8389015 77.88659214 338.55132198 77.87453651 C339.7515852 77.89139503 339.7515852 77.89139503 340.97609615 77.90859413 C344.68683502 77.86669642 346.89671233 77.54863157 350.06185055 75.54583168 C353.29719163 72.20275152 354.45471191 70.10354934 354.52446651 65.51369667 C354.4559171 61.89639654 354.25774474 60.5679158 352.33696651 57.38869667 C347.86061888 53.29603597 344.62407044 53.09161691 338.81011105 53.09816933 C337.95939022 53.0914521 337.1086694 53.08473488 336.23216915 53.0778141 C333.41547994 53.05879206 330.59902849 53.05490775 327.78227901 53.05275917 C325.82556211 53.046334 323.86884618 53.03960585 321.91213131 53.03258705 C317.80811492 53.02060364 313.70418277 53.0169073 309.60015011 53.0180912 C304.34188147 53.01829441 299.08415318 52.9909948 293.82601261 52.95654678 C289.78366777 52.93430599 285.74145353 52.9302528 281.69905376 52.93131065 C279.76057098 52.92895034 277.82208482 52.92010269 275.88366222 52.90464592 C273.17126073 52.88504363 270.46003153 52.8908012 267.74761105 52.90285683 C266.54734783 52.88599831 266.54734783 52.88599831 265.32283688 52.86879921 C260.28538606 52.92567674 257.66455216 53.75655627 254.14946651 57.38869667 Z "
        transform="translate(69.8505334854126,34.61130332946777)"
      />
    </svg>
  )
}

export default ProjectIcon