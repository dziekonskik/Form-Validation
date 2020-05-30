# Projekt praktyczny Walidacja formularza

### Wprowadzenie:

Każda aplikacja webowa z prawdziwego zdarzenia umożliwia użytkownikowi zapisywania danych na
serwerze. Elementem pozwalającym na przekazanie tych danych są formularze. Jednak zanim zawartość
formularza trafi na serwer, musisz przeprowadzić walidacją formularza po stronie klienta. Proces ten
polega na upewnieniu za pomocą kodu JavaScript, że wszystkie pola formularza spełniają określone
wymagania.

### Opis zadania:

Zaimplementuj za pomocą HTML i JavaScript formularz z obsługą prostej walidacją zawartości. Jeżeli w
momencie kliknięcia przycisku “Wyślij”, pole nie spełnia jednego z poniższych wymagań, wyświetl
odpowiedni komunikat błędu. Formularz o poprawnej zawartości prześlij za pomocą metody POST na
adres wskazany w wymaganiach adres.

### Wymagania:

1. Formularz zawiera pola: name, email, password, confirm, rodo.

2. Polega formularza spełniaja następujące wymagania:

a) name

- musi mieć co najmniej dwa znaki

- nie może zawierać cyfr i znaków specjalnych

b) email

- musi zawierać małpę “@”

- musi zawierać domenę

c) password

- musi mieć co najmniej 8 znaków

- musi zawierać jeden znak pisany z dużej litery

- musi zawierać co najmniej jedną liczbę

- musi zawierać co najmniej jeden znak specjalny

d) confirm

- musi zawierać taką samą zawartość co password

e) rodo

- ma wartość boolowską: true lub false

3. Walidacja formularza zachodzi po kliknięciu przycisku “Wyślij”.

4. Formularz pozbawiony błędów wyślij na: https://przeprogramowani.pl/projekt-walidacja
