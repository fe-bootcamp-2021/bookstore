import { call, put } from "redux-saga/effects";
import { setNews, deleteNews } from "../../ducks/newsSlice";
import {
  requestGetNews,
  requestDeleteNews,
  requestAddNews,
  requestUpdateNews,
} from "../requests/news";

export function* handleGetNews(action) {
  try {
    const res = yield call(requestGetNews);
    if (res && res.status === 200) {
      console.log(res);
      const news = Object.keys(res.data).reduce((accumulator, currentValue) => {
        accumulator.push({ id: currentValue, ...res.data[currentValue] });
        return accumulator;
      }, []);
      yield put(setNews(news));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* handleDeleteNews(action) {
  try {
    const { newsId, idToken } = action.payload;
    const res = yield call(() => requestDeleteNews(newsId, idToken));
    if (res && res.status === 200) {
      yield put(deleteNews(action.payload));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* handleAddNews(action) {
  try {
    const { newNews, idToken } = action.payload;
    const addNewsRes = yield call(() => requestAddNews(newNews, idToken));
    if (addNewsRes && addNewsRes.status === 200) {
      const res = yield call(requestGetNews);
      if (res && res.status === 200) {
        const news = Object.keys(res.data).reduce((a, b) => {
          a.push({ id: b, ...res.data[b] });
          return a;
        }, []);
        yield put(setNews(news));
      }
    }
  } catch (err) {
    console.log(err);
  }
}

export function* handleUpdateNews(action) {
  try {
    const { id, changes, idToken } = action.payload;
    yield call(() => requestUpdateNews(id, changes, idToken));
    const res = yield call(requestGetNews);
    const news = Object.keys(res.data).reduce((a, b) => {
      a.push({ id: b, ...res.data[b] });
      return a;
    }, []);
    yield put(setNews(news));
  } catch (err) {
    console.log(err);
  }
}
