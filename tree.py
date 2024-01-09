from termcolor import cprint

N = 10
THIRD = 0
CHR = False


def printChr():
    global CHR
    global THIRD

    attrs = []

    if THIRD == 3:
        attrs.append('bold')
        THIRD = 0
    
    if CHR:
        cprint('1', end='', color='green', attrs=attrs)
    else:
        cprint('0', end='', color='green', attrs=attrs)
    
    CHR = not CHR
    THIRD += 1

def printPartialTree(start):
    for i in range(start, N):
        for _ in range(N - i -1):
            print(' ', end='')
        
        for _ in range(i):
            printChr()
        
        for _ in range(i - 1):
            printChr()

        print('\n', end='')

def printDecoration():
    for i in range(2 * N - 3):
        if i%4 == 0:
            cprint('@', color='yellow', end='')
        else:
            cprint('*', color='white', end='', attrs=['bold'])
    print('\n', end='')

def printTree():
    printPartialTree(0)
    printDecoration()
    printPartialTree(6)
    printDecoration()
    printPartialTree(6)
    printDecoration()
    printPartialTree(6)
    printDecoration()

if __name__ == '__main__':
    printTree()