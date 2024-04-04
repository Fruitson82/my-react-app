import React from "react";
import Card from "./Card";

function ProfileCard(props) {
    return (
        <Card title="Fruitson" background="#4ea04e">
            <p>안녕하세요, Fruitson입니다.</p>
            <p>저는 리엑트를 개발해봤습니다.</p>
        </Card>
    )
}

export default ProfileCard;