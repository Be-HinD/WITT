package com.ssafy.rasingdust.domain.problem.service;

import com.ssafy.rasingdust.domain.problem.dto.response.GetProblemResponse;
import com.ssafy.rasingdust.domain.problem.repository.TrashRepository;
import com.ssafy.rasingdust.global.exception.BusinessLogicException;
import com.ssafy.rasingdust.global.exception.ErrorCode;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProblemServiceImpl implements ProblemService{

    private final TrashRepository trashRepository;

    @Override
    public GetProblemResponse getProblem(Long number) {
        Long trashTableSize =  trashRepository.count();
        log.info("쓰레기 테이블 사이즈 : " + trashTableSize);
        // 유효성 검사
        if(number > trashTableSize) {
            throw new BusinessLogicException(ErrorCode.NUMBER_NOT_FOUND);
        }

        // 1~size까지 number 제외하고 2개 랜덤 뽑기
        List<Long> dummyKeys = pickTwoRandomNumbers(trashTableSize, number);
        String correct = trashRepository.findById(number)
            .orElseThrow(() -> new BusinessLogicException(ErrorCode.NUMBER_NOT_FOUND))
            .getTrashClassification();
        String dummy1 = trashRepository.findById(dummyKeys.get(0))
            .orElseThrow(() -> new BusinessLogicException(ErrorCode.NUMBER_NOT_FOUND))
            .getTrashClassification();
        String dummy2 = trashRepository.findById(dummyKeys.get(1))
            .orElseThrow(() -> new BusinessLogicException(ErrorCode.NUMBER_NOT_FOUND))
            .getTrashClassification();

//        System.out.printf("요청 번호 : %d, %s dummy1 : %d, %s, dummy2 : %d, %s"
//        , number, correct, dummyKeys.get(0), dummy1, dummyKeys.get(1), dummy2);
        return GetProblemResponse.builder()
            .correct(correct)
            .dummy1(dummy1)
            .dummy2(dummy2)
            .build();
    }

    public static List<Long> pickTwoRandomNumbers(Long size, Long excludeNumber) {
        List<Long> numbers = new ArrayList<>();
        // 1부터 size까지 숫자를 리스트에 추가합니다. 단, excludeNumber는 제외합니다.
        for (Long i = 1L; i <= size; i++) {
            if (i != excludeNumber) {
                numbers.add(i);
            }
        }
        Collections.shuffle(numbers, new Random());
        // 섞인 리스트에서 앞의 2열 반환
        return numbers.subList(0, 2);
    }
}
