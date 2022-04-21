pragma solidity 0.8.4;

contract FalconContract {

    struct Tweet {
        uint id;
        address username;
        string tweetText;
        bool isDeleted;
    }

    Tweet[] private tweets;


    // Mapping of Tweet if to the wallet address of the user
}