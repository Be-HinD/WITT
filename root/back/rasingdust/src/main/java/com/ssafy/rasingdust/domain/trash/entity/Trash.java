package com.ssafy.rasingdust.domain.trash.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Trash {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "trash_id")
    private Long id;

    @Column(name = "trash_classification", nullable = false)
    private String trashClassification;

    @Column(name = "material_classification", nullable = false)
    private String materialClassification;

}
