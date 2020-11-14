import React from 'react';
import './SaverNewsHeader.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNewsHeader({savedNews, sortKeywords}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <section className="savedNewsHeader">
      <p className="savedNewsHeader__title">Сохраненные статьи</p>
      <p className="savedNewsHeader__articles">{currentUser.name}, у вас {savedNews.length} {savedArticlesText(savedNews.length)}</p>

      {sortKeywords.length <= 3
        ?
        <p className="savedNewsHeader__keywords">
          По ключевым словам:
          {
            sortKeywords.map((keyword, idx) => {
              return idx < sortKeywords.length - 1
                ? <span key={idx} className="savedNewsHeader__keyword"> {keyword},</span>
                : <span key={idx} className="savedNewsHeader__keyword"> {keyword}</span>
            })
            }
        </p>
        :
        <p className="savedNewsHeader__keywords">
          По ключевым словам:
          {
            sortKeywords.map((keyword, idx) => {
              if (idx === 0) {
                return <span key="idx" className="savedNewsHeader__keyword"> {keyword},</span>
              } else if (idx === 1) {
                return <span key="idx" className="savedNewsHeader__keyword"> {keyword} </span>
              }
            })
          }
          и {sortKeywords.length -2}{getKeywordsText(sortKeywords.length - 2)}
        </p>
      }
    </section>
  )
}

  function savedArticlesText(num) {
    let text = 'сохранённых статей';
  if (num.toString().endsWith('1') && !num.toString().endsWith('11')) {
    text = 'сохранённая статья';
  } else if (num.toString().endsWith('2') && !num.toString().endsWith('12')) {
    text = 'сохранённые статьи';
  } else if (num.toString().endsWith('3') && !num.toString().endsWith('13')) {
    text = 'сохранённые статьи';
  } else if (num.toString().endsWith('4') && !num.toString().endsWith('14')) {
    text = 'сохранённые статьи';
  }
  return text;
  }

  function getKeywordsText(num) {
    let text = '-и другим';
    if (num.toString().endsWith('1') && !num.toString().endsWith('11')) {
      text = '-му другому';
    } else if (num.toString().endsWith('2') && !num.toString().endsWith('12')) {
      text = '-м другим';
    } else if (num.toString().endsWith('3') && !num.toString().endsWith('13')) {
      text = '-м другим';
    } else if (num.toString().endsWith('4') && !num.toString().endsWith('14')) {
      text = '-м другим';
    }
    return text;
  }

export default SavedNewsHeader
