import App from "../components/App";

export const Calendar = () => {
    return (
        <main className="me-main p-4 h-100 bg-color font-primary">
            <section>
                <div className="container-fluid schedule">
                    <div className="col-xxl-12">
                        <div className="row">
                            <div className="col-md-4 mx-4">
                                <h2>Order Schedule</h2>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-around">
                            <div className="col-md-7">
                                <App />
                            </div>

                            <div className="col-md-4 d-none d-lg-block">
                                <div className="month">
                                    <ul>
                                        <li className="prev">&#10094;</li>
                                        <li className="next">&#10095;</li>
                                        <li>June</li>
                                    </ul>
                                </div>

                                <ul className="weekdays">
                                    <li>Mo</li>
                                    <li>Tu</li>
                                    <li>We</li>
                                    <li>Th</li>
                                    <li>Fr</li>
                                    <li>Sa</li>
                                    <li>Su</li>
                                </ul>

                                <ul className="days">
                                    <li></li>
                                    <li></li>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                    <li>6</li>
                                    <li>7</li>
                                    <li>8</li>
                                    <li>9</li>
                                    <li>10</li>
                                    <li>12</li>
                                    <li>13</li>
                                    <li>14</li>
                                    <li>15</li>
                                    <li>16</li>
                                    <li>17</li>
                                    <li>18</li>
                                    <li>
                                        <span className="active">19</span>
                                    </li>
                                    <li>20</li>
                                    <li>21</li>
                                    <li>22</li>
                                    <li>23</li>
                                    <li>24</li>
                                    <li>25</li>
                                    <li>26</li>
                                    <li>27</li>
                                    <li>28</li>
                                    <li>29</li>
                                    <li>30</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Calendar;
