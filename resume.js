kaboom({
    global: true,
    fullscreen: true,
    debug: true,
    scale: 1,
    clearColor: [0,0,0,1],
})

const MOVING_SPEED = 150
var isJumping = true

const FALL_DEATH = 1000

loadSprite('boundary','https://i.imgur.com/pogC9x5.png')
loadSprite('mario','https://i.imgur.com/Wb1qfhK.png')
loadSprite('flag','https://i.imgur.com/gh0q6EF.png')
loadSprite('yellowblock','https://i.imgur.com/w3o4j31.png')
loadSprite('unboxed','https://i.imgur.com/bdrLpi6.png')
loadSprite('door','https://i.imgur.com/UQReu8x.jpg')
loadSprite('door-1','https://i.imgur.com/VMzLl9n.jpg')
loadSprite('surprise','https://i.imgur.com/gesQ1KP.png')
loadSprite('rarrow','https://i.imgur.com/v8VOA7q.png')
loadSprite('grass','https://i.imgur.com/356Z6d8.png')
loadSprite('flower','https://i.imgur.com/NV83xrE.png')
loadSprite('table','https://i.imgur.com/UejJw1N.png')
loadSprite('tree','https://i.imgur.com/JcKPtVo.png')
loadSprite('food', 'https://i.imgur.com/wL81b6s.png')
loadSprite('balloon','https://i.imgur.com/FxVXzth.png')
loadSprite('fence','https://i.imgur.com/l0LVwQl.png')
loadSprite('fencerotate','https://i.imgur.com/T02EtnC.png')
loadSprite('iimjobs','https://i.imgur.com/CLtjSvK.png')
loadSprite('zebpay','https://i.imgur.com/8yxsJsL.jpg')
loadSound("shoot", "https://soundcloud.com/oneseventy/jakka-b-x-tatsunoshin-someone-to-forget");

// const music = play(shoot)

// music.loop()

//Education details
function educationText() {

    add([
        text('Class Year  Percentage', 8, {width: 400}),
        pos(width()/2 + 380, 70),
        layer('ui')
    ])

    add([
        text('10th  2016     95%', 8, {width: 400}),
        pos(width()/2 + 380, 80),
        layer('ui'),

    ])

    add([
        text('Delhi Public School Ghaziabad', 8, {width: 400}),
        pos(width()/2 + 380, 140),
        layer('ui')
    ])

    add([
        text('Board - CBSE', 8, {width: 400}),
        pos(width()/2 + 380, 150),
        layer('ui')
    ])

    add([
        text('12th  2018    95.6% ', 8, {width: 400}),
        pos(width()/2 + 380, 100),
        layer('ui')
    ])
}

//Contact Details
function contactDetails() {
    add([
        text('Email:yathartharora1999@gmail.com', 8, {width: 400}),
        pos(40, 210),
        layer('ui')
    ])

    add([
        text('Contact Number: 8826313566', 8, {width: 400}),
        pos(40, 240),
        layer('ui')
    ])
}

//Experience

//iimjobs
function experience(){
    add([
        text('Designation: Software Trainee', 8, {width: 400}),
        pos(2*width() - 200,height()-200)
    ])

    add([
        text('Duration: May 2019 - July 2019', 8, {width: 400}),
        pos(2*width() - 200,height()-180)
    ])

    add([
        text('Mentor: Mr. Saurabh Nanda', 8, {width: 400}),
        pos(2*width() - 200,height()-160)
    ])

}

//Zebpay
function experienceZebpay(){

    add([
        text('Designation: R&D Intern', 8, {width: 200}),
        pos(width() + 50, height()-300),
    ])

    add([
        text('Duration: May 2021 - Present', 8, {width: 400}),
        pos(width() + 50, height()- 280),
    ])
    
    add([
        text('Mentor: Mr. Prashanth Irudayaraj', 8, {width: 400}),
        pos(width() + 50, height()- 260),
    ])
}

scene("game", () => {
    layers(['bg', 'obj', 'ui'], 'obj')

    const map = [
        '============================================================================================================================================================',                                                                            
        '=?                                                                    =                                                                                    =',                          
        '=                                                     --------------  =                                                                                    =',                                         
        '=                          &####&      &####&         -            -  =                                                                                    =',                                         
        '=                                                     ]            -  =                                                                                    =',                                        
        '=  ++++++++++++++++++  +++++++++++++++++++++++++++++++             -  =                                                                                    =',                                        
        '=                    +                                -            -  =                                                                                    =',                                        
        '=                     +                               --           -  =                                                                                    =',                                        
        '=                      +                              - -  ))))))) -  =                                                                                    =',                                        
        '=---------------        +                             -  -         -  =                                                                                    =',                                        
        '=-             -         +                            --------------  =                                                                                    =',                                        
        '=-             -          +                  &####&&####&             =                                                                                    =',                                        
        '=-             [                                                      =  z                                                                                 =',                                        
        '=-               +++++++++++++++++++  ++++++++++++++++++++++++++++++  =                                                                                    =',                                        
        '=-                                   +                                =                                                                                    =',                                        
        '=- ))))))))    -                    +                                 =                                                                                    =',                                        
        '=-             -                   +                                  =                                                                                    =',                                        
        '=---------------                  +                                   =                                                                                    =',                                        
        '=                                +                                    = <>>>>>>>>>>>>>>>>>                                             i                   =',                                        
        '=                               +         $   *   !                   = <                                                                                  =',                                        
        '=                              +                                      = <                 |                                                                =',                                        
        '=                                                                     = <                                                                                  =',                                        
        '=               +++++++++++++++++++++++++++++++++++++                 = <                 ++++++++++++++++++++++++++                <>>>>>>>>>>>>>>>>>>    =',                                        
        '=                                                                     = <                <                          +               <                   <  =',                                        
        '=                                                                     = <             +  <                           +              <                   <  =',                                        
        '=        --                                               -         % = <           +    <                            +             <                   <  =',                                       
        '=       -                                                  -          = <                                              +                                <  =',                                        
        '=      -                                                    -       ---  >>>>>>>>>>>>>>>>                               +           /                   <  =',                                        
        '=     -                                                      -   -    -                                                                                 <  =',                                        
        '=    -                                                        -     ---                                     ++++++++++++++++++++++                      <  =',                                        
        '=    -                                                         --                                          +                       <                    <  =',                                        
        '=    -                                                           -   ^                                    +                        <                    <  =',                                        
        '=    -                                                                                                   +                          >>>>>>>>>>>>>>>>>>     =',                                        
        '=    -                 :                                           ----++++++++++++++++++++++++++++++++++                                                  =',
        '=    -                 @                                          -    =====================================================================================',
        '=    -                                                           -    =',
        '=    ------------------------------------------------------------     =',
        '=                                                                     =',
        '=======================================================================',
    ]
    
    
    const levelcfg = {
        width: 20,
        height: 20,
        '=': [sprite('boundary')],
        '?': [sprite('flag'), scale(0.09)],
        '+': [sprite('yellowblock'), scale(0.06), solid()],
        '-': [sprite('unboxed'), solid()],
        ']': [sprite('door'), solid(), scale(0.2), 'door'],
        '[': [sprite('door-1'), solid(), scale(0.05),'door-1'],
        '$': [sprite('surprise'), solid(), 'hardworking-surprise'],
        '*': [sprite('surprise'), solid(), 'sincere-surprise'],
        '!': [sprite('surprise'),solid(), 'reliable-surprise'],
        '^': [sprite('rarrow'), scale(0.05)],
        '#': [sprite('grass'), scale(0.05)],
        '&': [sprite('flower'), scale(0.07)],
        '@': [sprite('table'), scale(0.05), solid()],
        ')': [sprite('tree'), scale(0.05)],
        ':': [sprite('food'),scale(0.05),solid(), 'food'],
        '%': [sprite('balloon'), scale(0.05), solid(), 'balloon'],
        '>': [sprite('fence'), scale(0.05), solid()],
        '<': [sprite('fencerotate'), scale(0.05), solid()],
        '/': [sprite('door-1'), solid(), scale(0.05),'door-2'],
        '|': [sprite('door-1'), solid(), scale(0.05), 'door-3'],
        'i': [sprite('iimjobs'), scale(0.5)],
        'z': [sprite('zebpay'), scale(0.4)]
    }

    const resume = addLevel(map, levelcfg)


    add([
        text('Gamify Resume', 21, {width: 400}),
        pos(width()/2 - 200,20),
        layer('ui')
    ])

    add([
        text('EDUCATION', 21, {width: 400}),
        pos(width()/2 + 400, 20),
        layer('ui')
    ])

    add([
        text('CONTACT DETAILS', 21, {width: 400}),
        pos(20, 160),
        layer('ui')
    ])

    

    const player = add([
        sprite('mario'), solid(),
        pos(70,0),
        body(),
        origin('bot')
    ])

    keyDown('left', () => {
        player.move(-MOVING_SPEED,0)
    })
    keyDown('right', () => {
        player.move(MOVING_SPEED,0)
    })

    action(() => {
        if(keyIsDown("w")){
            player.move(0,-MOVING_SPEED)
        }
        if(keyIsDown("a")){
            player.move(-MOVING_SPEED,0)
        }
        if(keyIsDown("d")){
            player.move(+MOVING_SPEED,0)
        }
        if(keyIsDown("s")){
            player.move(0,MOVING_SPEED)
        }
    })

    player.action(() => {
        if(player.grounded()) {
            isJumping = false
        }
    })
   
    keyPress('space', () => {
        if(player.grounded()) {
            isJumping = true
            player.jump(300)
        }
    })

    player.collides('food', (f)=> {
        destroy(f)
        this.scale = vec2(1)

    })

    player.collides('door', (d) => {
        destroy(d)
        educationText()
    })

    player.collides('door-2', (d)=> {
        destroy(d)
        experience()
    })

    player.collides('door-3', (d)=> {
        destroy(d)
        experienceZebpay()
    })

    add([
        text('RESTART', 8 , {width:100}),
        pos(width()/2 + 600, height()/2 + 120),
        layer('ui')
    ])

    player.collides('door-1',(d)=> {
        destroy(d)
        contactDetails()
    })
    player.collides('balloon',(b) => {
        destroy(b)
        go('game')
    })

    player.on("headbump", (s)=> {
        if(s.is('hardworking-surprise')){
            add([
                text('Hardworking',8,{width: 100}),
                pos(width()/2 + 70,height()/2 - 25),
                layer('ui')
            ])
            destroy(s)
            resume.spawn('-', s.gridPos.sub(0,0))
        }

        if(s.is('sincere-surprise')){
            add([
                text('Sincere',8,{width: 100}),
                pos(width()/2 + 200,height()/2 - 25),
                layer('ui')
            ])
            destroy(s)
            resume.spawn('-',s.gridPos.sub(0,0))
        }

        if(s.is('reliable-surprise')){
            add([
                text('Reliable', 8, {width: 100}),
                pos(width()/2 + 300, height()/2 - 25),
                layer('ui')
            ])
            destroy(s)
            resume.spawn('-', s.gridPos.sub(0,0))
        }
    })

    player.action(() => {
        camPos(player.pos)
        if((player.pos.y) >= FALL_DEATH){
            go('game')
        }
    })
})



start("game")