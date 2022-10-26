import { connect } from 'react-redux'




const Leaderboard = ({users}) => {
    
        const keys = Object.keys(users);

        var userArray = [];
        var infoArray = [];
        for(var i = 0; i< keys.length; i++){
            var value = users[keys[i]];
            userArray.push(value);
        }

        userArray.forEach(user => {
            const answers = Object.keys(user.answers).length;
            const info= [user.id, answers, user.questions.length];
            infoArray.push(info);
        });
        infoArray.sort((a,b) =>  b[1] -  a[1]);

        return(
            <div >
                <h1>Leaderboard</h1>
                <div id="container">
                    {
                        infoArray.map((num) =>(
                            <div className="row" key={num[0]}>
                                <div className="name">{num[0]}  </div>
                                <img className="name" alt="user avatar" src={users[num[0]].avatarURL}/>  
                                <div className="answered">Questions Answered: {num[1]} </div>      
                                <div className="posted"> Questions Posted: {num[2]}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        );
};

export const mapStateToProps = ({users}) =>  ({
    users,
});

export default connect(mapStateToProps)(Leaderboard);
