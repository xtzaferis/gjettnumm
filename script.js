var Spill = React.createClass({
    getInitialState: function() {
       return {}; 
    },
    
    render: function() {
        
        return (
            <div id="spill">
                <h2>Gjett Nummeret</h2>
                <hr />
                <div>
                    <h3>Hei fra gjettnumm</h3>
                </div>
            </div>
        );
    }
});


ReactDOM.render(
    <Spill />,
    document.getElementById('container')
);