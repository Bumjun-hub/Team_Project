use project_track;

-- user_authority의 check 값은 다음과 같습니다.('U' -> User, 'A' -> Admin)
create table user(
		user_no int auto_increment primary key
        , user_authority char(1) default 'U' check(user_authority in ('U', 'A')) not null
        , user_id varchar(20) not null
        , user_password varchar(30) not null
        , user_name varchar(20) not null
        , user_address varchar(50) not null
        , user_email varchar(50)
		, user_phone varchar(15) 
);

-- track_type의 check 값은 다음과 같습니다.('M' -> Mountain, 'O' -> Ocean, 'H' -> Historic)
create table track(
	track_no int auto_increment primary key
    , track_type char check(track_type in ('M', 'O', 'H')) not null
    , track_name varchar(20) not null
);

-- track_course_level의 check 값은 다음과 같습니다.('L' -> Low, 'M' -> Middle, 'H' -> High)
create table track_course(
	track_course_no int auto_increment primary key
    , track_no int not null
    , track_course_introduce varchar(100) 
    , track_course_directions varchar(100) 
    , track_course_type varchar(50)
    , track_course_level char(1) check(track_course_level in ('L', 'M', 'H'))
    , track_course_time int
    , track_course_distance int
    , foreign key(track_no) references track(track_no)
);

-- track_control의 check 값은 다음과 같습니다.('A' -> Allowed, 'P' -> Partially Allowed, 'N' -> Not Allowed)   
create table track_description(
	track_description_no int auto_increment primary key
    , track_no int not null
    , track_introduce varchar(100)
    , track_history varchar(100)
    , track_fee int
    , track_caution varchar(100)
    , track_control char(1) check(track_control in ('A', 'P' ,'N'))
    , track_weather varchar(100)
    , foreign key(track_no) references track(track_no)
);

create table track_exploration(
	track_exploration int auto_increment primary key
    , track_no int not null
    , flower varchar(50)
    , tree varchar(50)
    , foreign key(track_no) references track(track_no)
);




