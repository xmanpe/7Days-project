import { useState, useEffect } from 'react';

const Modal = (props) => {
    const [news, setNews] = useState(null);
    const newsAPI = {
        key: '35eaca7c40064979bbf082c531aa588d',
    }

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${newsAPI.key}`)
            .then(res => {
                console.log('All news data has been loaded.');
                return res.json();
            })
            .then(data => {
                console.log(data);
                setNews(data);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, []);
    return (
        <div className="{ modal fade }" id="theModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="{ modal-dialog modal-dialog-centered modal-dialog-scrollable }">
                <div className="{ modal-content }">
                    <div className="{ modal-header }">
                        <h5 className="{ modal-title }" id="modalLabel">Your Phone</h5>
                        <button type="button" className="{ btn-close }" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="{ modal-body }">
                        <div className='dateSection'>
                            <h3>Date App Widget</h3>
                            <p>Sponsored By Erik</p>
                            <div className='dateButtonSection'>
                                {localStorage.getItem('resultDateName') ? <button className="theRomanceButton" onClick={props.addRomance} id="buttonList" type="button">+ Call Partner</button> : <button className="theRomanceButton" data-bs-toggle="modal" data-bs-target="#theModalDate" id="buttonList" type="button">+ Call Partner</button>}
                                {localStorage.getItem('resultDateName') ? <button className="theRomanceButton" onClick={props.addRomance} id="buttonList" type="button">+ Message Partner</button> : <button className="theRomanceButton" data-bs-toggle="modal" data-bs-target="#theModalDate" id="buttonList" type="button">+ Message Partner</button>}
                            </div>
                        </div>
                        <div className="appTitle">
                            <h3>News App</h3>
                            <p>Powered By newsapi.org</p>
                        </div>
                        <div className="listOfNews">
                            {news && (news.articles).map((theDataResult) => (
                                <div className='newsCard'>
                                    <div className='newsImage'>
                                        <img src={theDataResult.urlToImage}/>
                                    </div>
                                    <div className='newsInfo'>
                                        <h5>{theDataResult.title}</h5>
                                        <p>{theDataResult.description}</p>
                                        <a target={'_blank'} href={theDataResult.url}>Read More</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Modal;