# feodal-frontend
## Инструкция по обращению с git
### Создание веток
Вариант через консоль: 
1. Пишем команду `git checkout -b *Название ветки* main`
> При нейминге веток руководствуйтесь правилом - `#123Gomozov`, где `#123` номер задачи из [miro](https://pages.github.com/), а `Gomozov` - фамилия разработчика

Вариант на сайте github: 
1. Заходим на репозиторий
2. Нажимаем на список веток
3. Пишем название ветки
> При нейминге веток руководствуйтесь правилом - `#123Gomozov`, где `#123` номер задачи из [miro](https://pages.github.com/), а `Gomozov` - фамилия разработчика
4. Нажимаем на `Create branch: from ‘main’`

### Фиксирование изменений (Commit)
Командой `git commit -m '*Название коммита*'` фиксируем изменения
> При нейминге коммитов руководствуйтесь правилом - `refs#123Gomozov`, где `#123` номер задачи из [miro](https://pages.github.com/), а `Gomozov` - фамилия разработчика

### Выложить изменения в git (Push)
Командой `git push`
> ВНИМАНИЕ: ИЗМЕНЕНИЯ НАДО ПУШИТЬ ТОЛЬКО В СВОЕЙ ВЕТКЕ, НИ В КОЕМ СЛУЧАЕ НЕ ПУШИТЬ В `MAIN`
