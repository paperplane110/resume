def main():
    a = 0

    def add():
        nonlocal a
        a += 1

    add()
    print(a)


main()
